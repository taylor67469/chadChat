import axios from 'axios';

export default {
    getsignup: function (user) {
        // console.log(user, 'This is the user in our API.js')
        return axios.post("/api/signup", user)
        //   .then((res)=>{
        //       console.log(res);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
      },
      getlogin: function (user) {
        // console.log(user, 'This is the user in our API.js')
        return axios.post("/api/login", user)
        //   .then((res)=>{
        //       console.log(res);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
      },
      getForumPost: function (forumPost){
        return axios.post("/api/forumpost",forumPost)
      },
      getForum: function(forum){
        return axios.get("/forum",forum)
      },
      
}