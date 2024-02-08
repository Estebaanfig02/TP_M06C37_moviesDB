db = require('../database/models')
module.exports = {
    list:(req,res)=>{
        db.actors.findAll()
        .then(actores =>{
            res.render("actorsList",{actors:actores})
        })
        .catch(error =>{
            console.log(error)
        })},
        detail:(req,res)=>{
            const {id} = req.params
            db.actors.findByPk(id)
            .then(actores =>{
                res.render("actorsDetail",{actor:actores})
            })
            .catch(error =>{
                console.log(error)
            })}
}