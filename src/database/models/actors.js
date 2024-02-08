const config = require("../config/config");

module.exports = (sequelize,DataTypes) =>{
const alias = "actors"
const cols ={
    id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement:true},
    created_at:DataTypes.DATE,
    updated_at:DataTypes.DATE,
    first_name:DataTypes.STRING,
    last_name:DataTypes.STRING,
    rating:DataTypes.DECIMAL,
    favorite_movie_id:DataTypes.INTEGER,
    }
const config ={
    tableName: "actors",
    timestamps: false
}
const actors = sequelize.define(alias,cols,config);
    return actors
}