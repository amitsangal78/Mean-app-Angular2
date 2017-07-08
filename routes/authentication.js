const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {
        if(!req.body.email || !req.body.username || !req.body.password){
            res.send({sucess: false, message: "Please check your credentials and email"});
        }else{
            let user = new User({
                email: req.body.email.toLowerCase(),
                username: req.body.username.toLowerCase(),
                password: req.body.password
            });
            user.save((err) => {
                if(err){
                    res.send({sucess: false, message: "Could not able to connect to database. Error.", err});
                }else{
                    res.send({sucess: true, message: "user saved"});
                }
            });
            //res.send('hello world');
        }
        
    });

    return router;
}