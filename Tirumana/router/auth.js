const express = require('express')

const { signup, requireSignin } = require('../controllers/authControllers');
const { signin } = require('../controllers/authControllers');
const { validateSignInRequest, validateSignUpRequest, isRequestValidated } = require('../validators');

const router = express.Router();

router.post('/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/signin', validateSignInRequest, isRequestValidated, signin);



module.exports = router;