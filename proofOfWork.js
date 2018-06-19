var crypto = require('crypto');
var target = '000000';
var data = 'Blockchain';
var result = '';
var nonce = '0';
for (;;) {
       var f = crypto.createHash('sha256');
        var h = f.update(data + ++nonce);
        result = h.digest('hex');
        if (result.slice(0,target.length) == target) {
            break;
        }
}
var check = crypto.createHash('sha256').update(data + nonce).digest('hex');
if (check.slice(0,target.length) == target) {
        console.log(check);
        console.log('Verified nonce = '+nonce);
        }