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
        const token = localStorage.getItem('token') || 0;
        return await axios.get('/auth/user', {
            headers: {
            'Authorization': `Basic ${token}` 
          }
        })
    },
    logout: async (userObj) => {
        return await axios.post("api/auth/logout")
    }

}
  export default API