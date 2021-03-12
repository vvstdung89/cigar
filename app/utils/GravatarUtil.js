const crypto = require('crypto');

function generateGravatarLinkFromEmail(email, size) {
    if (!size) {
        size = 200;
    }
    if (!email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash('md5').update(email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
}

module.exports = {
    generateGravatarLinkFromEmail: generateGravatarLinkFromEmail
}