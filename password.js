const crypto = require("crypto");

//Generating salt and hash
function genPass(password) {
    
    const genSalt = crypto.randomBytes(32).toString("hex");
    const genHash = crypto.pbkdf2Sync(password, genSalt, 10000, 64, "sha512").toString("hex");
    
    return {
        salt: genSalt,
        hash: genHash
    };
}

//Verifies user password with database salt and hash
function validPass(password, salt, hash) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

    return hash === hashVerify;
}

module.exports = {genPass, validPass};