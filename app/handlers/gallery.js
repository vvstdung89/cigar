exports = module.exports = function (req, res) {
        res.write(`<link href="assets/css/gallery.css" rel="stylesheet">
        <div class="row center">
        <ul>
        <li class="skin" onclick="$('#nick').val($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./../skins/btc.png")'></div>
        <h4 class="title">btc</h4>
        </li>
        <li class="skin" onclick="$('#nick').val($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./../skins/doge.png")'></div>
        <h4 class="title">doge</h4>
        </li>
        <li class="skin" onclick="$('#nick').val($(this).find('.title').text());" data-dismiss="modal">
        <div class="circular" style='background-image: url("./../skins/prv.png")'></div>
        <h4 class="title">prv</h4>
        </li>
        </ul>
        </div>`)
    res.end()
};
