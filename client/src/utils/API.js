const axios = require('axios');


const API ={

    createUser: async (userObj) => {
        return await axios.post("/auth/register", userObj)
        
    },

    loginUser: async (userObj) => {
        return await axios.post("/auth/login", userObj)
        
    },
    userServices: async (userObj) => {
        return await axios.post("/auth/service", userObj)
    },
    getUser: async (userObj) => {
        return await axios.get("/auth/user")
    }

}
  export default API