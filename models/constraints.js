const Sequelize = require("sequelize");
const sequelize = require("../utils/dbconnection");
const  DataTypes = require('sequelize/lib/data-types');
const PKConstraint={
    allowNull:false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const TxtColConstraint={
    type:DataTypes.TEXT,
}
const TxtColNotNullConstraint={
    allowNull:false,
    type:DataTypes.TEXT,
    validate:{notNull:true,notEmpty: true }//wont allow null
}
const DateColConstraint={
    type:DataTypes.DATEONLY
}
const NumColConstraint={
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{notNull:true,notEmpty: true}

}
const DeciColConstraint={
    type:DataTypes.DECIMAL,
}
const MailColConstraint={
    type:DataTypes.TEXT,
    validate:{isEmail:true}
}
const MailNotNullConstraint={
    type:DataTypes.TEXT,
    allowNull:false,
    unique:true,
    validate:{isEmail:true,notNull:true,notEmpty: true}
}
