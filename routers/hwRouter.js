const express = require('express');
const router = express.Router()

router.get('/hw', function(req, res) {
    
    try{
        
        res.send("Hello World!")
    }catch(e){
        res.send('erro ao achar rota')
    }
})





module.exports = router