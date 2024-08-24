const express = require('express')

const App = express();

App.get('/',async (req ,res)=>{
    res.json({
        "msg":"Its the HOME Page"
    })
    
})
App.get('/user',async (req ,res)=>{
    res.json({
        "msg":"This is the User Page"
    })
    
})
App.get('/account',async (req ,res)=>{
    res.json({
        "msg":"THis is accounts Page"
    })
    
})
App.listen(3000)