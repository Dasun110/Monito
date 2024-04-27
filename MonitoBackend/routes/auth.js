const router =require('express').Router();
const authController =require("../controllers/authController");

router.post('/register',authController.creareUser);
router.post('/login',authController.loginUser);

module.exports =router;