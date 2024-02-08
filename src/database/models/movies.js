const config = require("../config/config");

module.exports = (sequelize,DataTypes) =>{
const alias = "movies"
const cols ={
    id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement:true},
    created_at:DataTypes.DATE,
    updated_at:DataTypes.DATE,
    title:DataTypes.STRING,
    rating:DataTypes.DECIMAL,
    awards:DataTypes.INTEGER,
    release_date:DataTypes.DATE,
    length:DataTypes.INTEGER,
    genre_id:DataTypes.INTEGER,
    }
const config ={
    tableName: "movies",
    timestamps: false
}
const movies = sequelize.define(alias,cols,config);
    return movies
}