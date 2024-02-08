db = require('../database/models')
module.exports = { 
    list: (req,res)=>{
        db.movies.findAll()
        .then(pelicula =>{
            res.render("moviesList",{movies:pelicula})
        })
        .catch(error =>{
            console.log(error)
        })  
    },
    detail: (req,res)=>{
            const {id} = req.params
            db.movies.findByPk(id)
            .then(pelicula =>{
                res.render("moviesDetail",{movie: pelicula})
            })
            .catch(error =>{
                console.log(error)
            })
    },
    new:(req,res)=>{
        db.movies.findAll({
            order:[
                ["release_date","ASC"]
            ]
        
        })
        .then(pelicula =>{
            res.render('newestMovies',{movies: pelicula})    
        })
        .catch(error =>{
            console.log(error)
        })
    },
    recomended: (req,res)=>{
        db.movies.findAll({
            order:[
                ["release_date","DESC"]
            ],
            limit:5
        
        })
        .then(pelicula =>{
            res.render('newestMovies',{movies: pelicula})    
        })
        .catch(error =>{
            console.log(error)
        })
    }
}