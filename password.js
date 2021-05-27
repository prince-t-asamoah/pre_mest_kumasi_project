const crypto = require("crypto");


//Generating salt and hash
function genPass(password) {
    
   const salt = crypto.randomBytes(32).toString("hex");
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
    
    return {
        salt: salt,
        hash: genHash
    };
}

//Verifies user password with database salt and hash
function validPass(password, salt, hash) {
    const hashverify = crypto.pbkdf2Sync(password, salt, hash).toString("hex");

    return hash === hashverify;
}

module.exports = { genPass, validPass};