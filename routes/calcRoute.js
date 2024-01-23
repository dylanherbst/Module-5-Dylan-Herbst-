
const express = require('express');
const router = express.Router();
const calcControl = require("../controller/calcController");


    router.get('/add', (req, res) => {
        calcControl.addNumbers(req,res)
        })


    router.get('/subtract', (req, res) => {
        calcControl.takeNumbers(req,res)
       })


       router.get('/divide', (req, res) => {
        calcControl.divideNumbers(req,res)
       })

       router.get('/multiply', (req, res) => {
        calcControl.multiplyNumbers(req,res)
        })         
    


module.exports = router;