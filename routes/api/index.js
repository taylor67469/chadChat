const router = require("express").Router();
const chadRoutes = require("./chadAPI");
const User= require("../../models/User")
const bcrypt= require("bcrypt");
const ForumPost=require("../../models/forumPost");
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
        alert("You are now logged in")
        // authentication successful
        return res.json(true);
    }
})
//makes forum data  title/description in database
router.post('/forumpost', async (req,res)=>{
    try{
        console.log(req.body);
    const forumData = await ForumPost.create(req.body);
        res.status(200).json(forumData);
    }
    catch (err) 
    {
        res.status(400).json(err);
    }
})
router.get('/forum', async(req,res)=>{
    
    ForumPost.findAll({
    
    }).populate("user").then(data => {
        //this data includes the user fully populated--email, username, and hashed passowrd are all being returned
        /**
         * goal of data to look like:
         * data = [{title: "", description: "", user: {
                                                * username: ""
        * }}]
         * 
         */
        res.json(data);

    })
})  
module.exports = router;

