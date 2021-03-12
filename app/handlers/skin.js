var fs =  require("fs")
exports = module.exports = {
    get,
    list,
};
const SKINS = ["btc","prv","doge"]

function list(req, res) {
    //TODO: list skin base on SKINS constant
    //TODO: using req.header.cookie to extract email and add 1 more skin base on gravatar (at the beginning of the list)
    //TODO: add more skin

    res.write(`<link href="assets/css/gallery.css" rel="stylesheet">
        <div class="row center">
        <ul>
        <li class="skin" onclick="window.setSkinName($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./skin/btc")'></div>
        <h4 class="title">btc</h4>
        </li>
        <li class="skin" onclick="window.setSkinName($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./skin/doge")'></div>
        <h4 class="title">doge</h4>
        </li>
        <li class="skin" onclick="window.setSkinName($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./skin/prv")'></div>
        <h4 class="title">prv</h4>
        </li>
        </ul>
        </div>`);
    res.end();
}


function get(req, res) {
    let id = req.params.id
    if (SKINS.indexOf(id) != -1) {
        fs.createReadStream("/app/skins/"+id+".png").pipe(res)
    } else {
        //TODO: using gravatar
        res.redirect("https://gravatar.com/avatar/ffeadc15d8849bb94f1d785f4b7c98d3?s=200&d=retro");
    }

}
