var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'urlschema', 'coolMethod', [arg0]);
};

exports.test = function (arg0, success, error) {
    return "Test v.6";
};
