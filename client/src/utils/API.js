import axios from 'axios';

export default {
    getsignup: function (user) {
        return axios.post("/api/signup", user)
      },
      getlogin: function (user) {
        return axios.post("/api/login", user)
      },
      getForumPost: function (forumPost){
        return axios.post("/api/forumpost",forumPost)
      },
      getForum: function(){
        return axios.get("/api/forum")
      },
      
}