// Whole thing is winston logger stuff, if you want to learn read the docs

const path = require("path");

const { createLogger, transports, config, format } = require("winston");
const { combine, label, timestamp, printf } = format;

// const typedefs = require("../typedefs");

const getLabel = (callingModule) => {
  const parts = callingModule.filename.split(path.sep);
  return path.join(parts[parts.length - 2], parts.pop());
};

const logMetaReplacer = (key, value) => {
  if (key === "error") {
    return value.name + ": " + value.message;
  }
  return value;
}

const metaFormat = (meta) => {
  if (Object.keys(meta).length > 0)
    return "\n" + JSON.stringify(meta, logMetaReplacer) + "\n";
  return "\n";
}

const logFormat = printf(({ level, message, label, timestamp, ...meta }) => {
  if (meta.error) {
    for (const key in meta.error) {
      if (typeof key !== "symbol" && key !== "message" && key !== "name") {
        delete meta.error[key]
      }
    }
  }
  return `${timestamp} [${label}] ${level}: ${message}${metaFormat(meta)}`;
});

/**
 * Creates a curried function, and call it with the module in use to get logs with filename
 * @param {typedefs.Module} callingModule The module from which the logger is called
 * @returns {typedefs.Logger} 
 */
const logger = (callingModule) => {
  return createLogger({
    levels: config.npm.levels,
    format: combine(
      label({ label: getLabel(callingModule) }),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      logFormat,
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: __dirname + "/../logs/common.log" }),
      new transports.File({ filename: __dirname + "/../logs/error.log", level: "error" }),
    ]
  });
}

module.exports = logger;
