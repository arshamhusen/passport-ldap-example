const express = require("express");
const router = express.Router();
const { Users } = require("../../models");
const cors = require("cors");
const client = "https:localhost:3000";
const app = express();

// AD configuration need to setup env for safe usage
const AD = require('activedirectory2').promiseWrapper;
const config = { url: 'ldap://10.0.11.1:389',
           baseDN: 'OU=Waste Managment Corporation Limited,DC=intra,DC=wamco,DC=com,DC=mv',
           username: 'ssoadmin@intra.wamco.com.mv',
           password: 'A6YYe*"KDabD`35D' }
const ad = new AD(config);


router.use(express.json());
router.use(
  cors({
    origin: [client],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
router.use(express.json());


    



router.route("/login").post(async (req, res, next) => {

    const username = req.body.username + "@intra.wamco.com.mv";
    const password = req.body.password;

    ad.authenticate(username, password, function (err, auth) {
        if (auth) {
            ad.findUser(username, function( err, user) {
                if (user) {
        
                    const data = {
                        'username' : `${user.sAMAccountName}`,
                        'fullName' : `${user.cn}`,
                        'employeeId' : `${user.employeeID}`,
                        'email' : `${user.userPrincipalName}`
                        
                    }

                    const userExists = Users.findOne({
                        where: {
                            employeeId : data.employeeId
                        }
                    })


                    if (!userExists) {

                        const createUser = Users.create({
                            username : data.username,
                            fullName : data.fullName,
                            employeeId : data.employeeId,
                            email: data.email
                        })
    
                        createUser ? res.send("OK") : res.send("NOT Ok")
                    } else {
                        res.send("User already exists")
                    }
                   

                    
                } 
                if (err) {
                    res.status(400).send({'error' : 'could not load/find data about the user '});
                }
            })
        } 
        if (err) {
            res.status(400).send({'error' : 'wrong username/password'});
        }
    })

})

module.exports = router;


