const express = require('express');
const { signup, signin } = require('../../controllers/authControllers');



const { validateSignInRequest, validateSignUpRequest, isRequestValidated } = require('../../validators/index');


const router = express.Router();

router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);



module.exports = router;