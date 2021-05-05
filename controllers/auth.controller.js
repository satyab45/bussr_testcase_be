const jwt = require('jsonwebtoken');
const config = require('../config/config');

const users = [
    {
        username: 'john',
        password: 'password123admin',
    }, {
        username: 'anna',
        password: 'password123member',
    }
];

const accessTokenSecret = config.accessTokenSecret;

exports.login = function (req, res) {
    // Read username and password from request body
    const { username, password } = req.body;

    console.log(req.body);

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
};