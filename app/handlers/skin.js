const fs = require("fs");
const JWTUtil = require('../utils/jwt');
const GravatarUtil = require('../utils/GravatarUtil');

const SKINS = ["btc", "prv", "doge"]

function list(req, res) {
    //TODO: list skin base on SKINS constant
    //TODO: using req.header.cookie to extract email and add 1 more skin base on gravatar (at the beginning of the list)
    //TODO: add more skin

    const skinsList = SKINS.map(skin => {
        return {
            name: skin,
            imgSrc: `/assets/img/skins/${skin}.png`
        }
    });

    const userGravatarSkin = _getUserGravatarSkinFromCookies(req);
    if (userGravatarSkin) {
        skinsList.push(userGravatarSkin);
    }

    res.render('modals/skins', {
        skins: skinsList
    });
}

function _getUserGravatarSkinFromCookies(req) {
    const cookies = req.cookies;

    const token = cookies?.token;
    if (!token) {
        return null;
    }

    const tokenData = JWTUtil.decode(token);
    if (!tokenData?.payload?.user?.email) {
        return;
    }

    return {
        name: 'Gravatar',
        imgSrc: GravatarUtil.generateGravatarLinkFromEmail(tokenData?.payload?.user?.email, 512)
    }
}

function get(req, res) {
    let id = req.params.id
    if (SKINS.indexOf(id) !== -1) {
        fs.createReadStream("/app/skins/" + id + ".png").pipe(res)
    } else {
        //TODO: using gravatar
        res.redirect("https://gravatar.com/avatar/ffeadc15d8849bb94f1d785f4b7c98d3?s=200&d=retro");
    }

}

module.exports = {
    get,
    list,
};