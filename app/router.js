exports = module.exports = function (router) {
    router.post("/checkdir.php", require("./handlers/checkdir"));
    router.get("/include/gallery.php", require("./handlers/gallery"));

    router.post("/", require("./handlers/index").post);
    router.get("/", require("./handlers/index").get);

    router.all("*", function (req, res) {
        console.log("Not found: %s %s", req.method, req.url);
        res.status("404").end();
    });
};
