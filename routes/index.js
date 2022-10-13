const express = require("express");
const router = express.Router();

module.exports = ()=>{ 
    router.get("/" , (req , res)=>{ 
        res.render("home");
    })
    router.get("/homepage" , (req , res)=>{ 
        res.render("home");
    })
    router.get("/OurServices" , (req , res)=>{ 
        res.render("services");
    })
    router.get("/ContactUs" , (req , res)=>{ 
        res.render("contact");
    })

return router ;
};