const sequelize = require("../config/dbconnection");
var DataTypes = require('sequelize/lib/data-types');

const Schmea=sequelize.define("table_name",{
    AttributeID:{propertyKey:"PropertyValue"}
    /**Refer constraints.js Don't use it in import format**/
},{
    freezeTableName: true /**to avoid the pluarity of table name**/
})

/** Defining Relationship
    Regulation - TableB one to many
    TableA -contain ForeignKey Column
**/

/** Refer : https://sequelize.org/ **/

TableA.hasMany(TableB);
TableB.belongsTo(TableA);

module.exports={Schmea}