var request = require('request');
var config = require('../config');

module.exports = {
    getRedirect: function (api, res) {
        var url = config.url + api;
        request.get(url).on('error', function (err) {
            console.error(err);
            res.status(500);
            //res.render('error');
        }).pipe(res);
    },
    postRedrect: function (api, req, res) {
        var url = config.url + api;
        var option = {
            url: url,
            method: 'POST',
            json: true,
            headers: req.headers,
            body: req.body
        };
        request(option, function (err, remoteResponse, remoteBody) {
            if (err) {
                console.error(err);
                res.status(500)
                res.end('Error');
            }
            else {
                res.set(remoteResponse.headers);
                res.json(remoteBody);
            }

        });
    },
    get: function (api, callback) {
        if (typeof callback != "function") {
            console.error('callback is not function');
            return;
        }
        var url = config.url + api;
        request.get(url, function (err, remoteResponse, remoteBody) {
            if (err) {
                console.error(err);
                callback("Error");
            } else {
                callback({
                    headers: remoteResponse.headers,
                    data: remoteBody
                })
            }
        });
    },
    post: function (api, opt, callback) {
        if (typeof callback != "function") {
            console.error('callback is not function');
            return;
        }
        var url = config.url + api;
        var option = {
            url: url,
            method: 'POST',
            json: true,
            headers: opt.headers || {},
            body: opt.body || {}
        };
        request(option, function (err, remoteResponse, remoteBody) {
            if (err) {
                console.error(err);
                callback("Error");
            }
            else {
                callback({
                    headers: remoteResponse.headers,
                    data: remoteBody
                })
            }

        });
    },
}
