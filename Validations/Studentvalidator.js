const joi = require('joi');
exports.createvalidator=joi.object({
    name:joi.string().min(3).max(30).required(),
    city:joi.string().min(3).max(30).required(),
});

exports.updatevalidator=joi.object({
    name:joi.string().min(3).max(30).required(),        
    city:joi.string().min(3).max(30).required(),
});

const validate = (req, res, next) => {
    const { error } = exports.createvalidator.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }    
    next();
};  
exports.validate = validate;
exports.updatevalidate = (req, res, next) => {
    const { error } = exports.updatevalidator.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};  
