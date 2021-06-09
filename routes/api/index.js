const router = require("express").Router();
const chadRoutes = require("./chadAPI");
const User= require("../../models/User")
const bcrypt= require("bcrypt");
// Chad routes /api/chads
router.use("/chads", chadRoutes);
router.post('/signup', async (req, res)=>{
    try{
    console.log('here is what we get on the backend', req.body);
    const newUser=req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
    res.status(200).json(userData);
    }
    catch (err) {
        res.status(400).json(err);
      }
    /*console.log(req.body);  ideally, this is going to log the username, userpassword, user email
    talk to the database and create such user profile.
    then res.send("User created")*/
})

router.post('/login', async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const newUser = await User.findOne({username});

    // check account found and verify password
    if (!newUser || !bcrypt.compareSync(password, newUser.password)) {
        // authentication failed
        return false;
    } else {
        console.log("working");
        // authentication successful
        return true;
    }
})
module.exports = router;

