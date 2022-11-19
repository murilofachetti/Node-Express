const User = require('../models/User');

class UserController {
    getUser(id){
        return {
            id: 1,
            name: "Murilo Fachetti",
        };
    }

    getUsers() {
        return [
            {
                id: 1,
                name: "Murilo Fachetti",
            },
            {
                id: 2,
                name: "Murilo Fachetti2",
            },
            {
                id: 3,
                name: "Murilo Fachetti3",
            },
            {
                id: 4,
                name: "Murilo Fachetti4",
            },
        ];
    }
}

module.exports = UserController;