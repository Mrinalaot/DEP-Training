// Can you keep a secret?
// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    var _secret = secret;
    return {
        setSecret: function(newSecret) {
            _secret = newSecret;
        },
        getSecret: function() {
            return _secret;
        }
    };
}