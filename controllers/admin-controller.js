const {response} = require('express');
const data = require('../data/data')


module.exports = {
    admin_console:(request, response) => {
        response.render('pages/admin')
    },
    create_book: (request, response)=>{
        response.render ('pages/create')
    },
    update_book:(request,response)=>{
        const id=request.params.id
        const foundHerbal= data.find(herbal=>herbal._id=== String(id))
       console.log(foundHerbal)
        response.render ('pages/update',{
            foundHerbal:foundHerbal
        })
    }
}
