const {check,validationResult} = require('express-validator')

const userValidationRules =  [
    check("password").not().isEmpty().withMessage("Password can not be null!"),
    check("password").custom((value,{req}) => value === req.body.confirmpassword).withMessage("Password must be identical!")
];

const userValidation = (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array()[0].msg)
    }

    next();
}

module.exports = {userValidationRules, userValidation}