const { User } = require("../model/User");

let auth = (req, res, next) => {
  //getting token from client's cookies
  let token = req.cookies.x_auth;
  //decod token then find the user
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    //go to the next one -> (req, res)
    next();
  });
};

module.exports = { auth };
