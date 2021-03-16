const fs = require("fs");
const JWTUtil = require('../utils/jwt');
const GravatarUtil = require('../utils/GravatarUtil');

const SKINS = [
    "btc",
    "prv",
    "doge",
    "minion",
    "stonks",
    "bonk",
    "honk",
]

function list(req, res) {

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

function getGravatarSkinImage(req, res) {
    const userGravatarSkin = _getUserGravatarSkinFromCookies(req);

    if (userGravatarSkin) {
        res.redirect(userGravatarSkin.imgSrc);
    }
    else {
        res.redirect(`/assets/img/skins/prv.png`);
    }

}

module.exports = {
    get,
    list,
    getGravatarSkinImage
};