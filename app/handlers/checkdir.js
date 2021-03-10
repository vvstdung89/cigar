exports = module.exports = function (req, res) {
    let result = {
        action: "test",
        names: JSON.stringify(["btc", "prv", "doge"])
    };

    res.json({
        action: result.action,
        json: JSON.stringify(result),
        names: result.names,
    });
};
