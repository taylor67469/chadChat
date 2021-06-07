import axios from 'axios';

export default {
    getHomeRoute: function(){
        return axios.get("/api");
    }
}