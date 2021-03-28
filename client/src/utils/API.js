import axios from "axios";

export default {
    //Post to a users route is going to create User
    registerUser: function (user) {
        return axios.post("/api/user", user)
    },

    getAllStories: function () {
        return axios.get("/api/story")
    }
};