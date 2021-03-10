const jwt = require("../utils/jwt");
exports = module.exports = {
    post: function (req, res) {
        let token = req.body["gameplayToken"];
        let verify = jwt.verify(token, { issuer: "Incognito", subject: "Incognito Cryptocombat", audience: "Incognito" });

        if (verify.user && verify.user._id) {
            res.render("index", {token})
        } else {
            res.redirect()
        }
    },
    get: function(req, res){
        res.render("index",{token:""})
    }
};
