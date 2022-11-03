const express = require('express');
const router = express.Router();

const userControl=require("../controllers/userController")
const topicControl=require('../controllers/topicController')
const md=require('../middelware/auth')
//Userlogin 
router.post("/login",userControl.loginUser)
//UserRegister
router.post("/register",userControl.userCreation)
//add topics
router.post("/addTopic",md. userAuth,topicControl. addTopics)
//update topics
router.post("/updateTopic/:topicId",md. userAuth,topicControl.updateRankDetails)
//retrive rank data
router.post("/getRankDetails",md. userAuth,topicControl.getRankDetails)

module.exports = router;