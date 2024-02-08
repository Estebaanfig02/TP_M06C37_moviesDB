module.exports = (sequelize,DataTypes) =>{
    const alias = "genres"
    const cols ={
        id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement:true},
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
        name:DataTypes.STRING,
        ranking:DataTypes.DECIMAL,
        active:DataTypes.DECIMAL
        }
    const config ={
        tableName: "genres",
        timestamps: false
    }
    const genres = sequelize.define(alias,cols,config);
        return genres
    }