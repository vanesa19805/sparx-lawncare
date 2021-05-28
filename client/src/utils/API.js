const axios = require('axios');


const API ={

    createUser: async (userObj) => {
        return await axios.post("/auth/register", userObj)
        
    },

    loginUser: async (userObj) => {
        return await axios.post("/auth/login", userObj)
        
    },

}
  export default API