exports = module.exports = function (router) {

    router.post("/", require("./handlers/index").post);
    router.get("/", require("./handlers/index").get);


    router.get("/list_skin", require("./handlers/skin").list);
    router.get("/skin/:id", require("./handlers/skin").get);

    router.all("*", function (req, res) {
        console.log("Not found: %s %s", req.method, req.url);
        res.status("404").end();
    });
};
