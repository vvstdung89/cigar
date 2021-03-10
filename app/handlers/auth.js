const jwt = require("../utils/jwt");
exports = module.exports = function (req, res) {
    console.log(req.body)
    let token = req.body["gameplayToken"];
    let verify = jwt.verify(token, { issuer: "Incognito", subject: "Incognito Cryptocombat", audience: "Incognito" });
    res.render("auth", {
        uid: verify.user._id,
        email: verify.user.email,
        token: token,
    });
};
