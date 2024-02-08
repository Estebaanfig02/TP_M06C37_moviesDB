db = require('../database/models')
module.exports = {
    list:(req,res)=>{
        db.genres.findAll()
        .then(generos =>{
            res.render("genresList",{genres:generos})
        })
        .catch(error =>{
            console.log(error)
        }) 
    },
    detail:(req,res)=>{
        const {id} = req.params
        db.genres.findByPk(id)
        .then(genero =>{
            res.render("genresDetail",{genre:genero})
        })
        .catch(error =>{
            console.log(error)
        })
    }  
}