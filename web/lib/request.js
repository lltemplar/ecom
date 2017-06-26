var request = require('request');
var config = require('../config');
var proxy = require('http-proxy').createProxyServer({});
proxy.on('proxyReq', function (proxyReq, req, res, options) {
    if (req.method == "POST" && req.body) {
        proxyReq.write(req.body);
        proxyReq.end();
    }
});

proxy.on('error', function (err, req, res) {
    console.log(JSON.stringify(err));
    res.status(500);
});

module.exports = {
    forward: function (api, req, res) {
        var url = config.url + api;
        if (req.method == "POST") {
            var data = JSON.stringify(req.body || {});
            req.body = data;
        }
        proxy.web(req, res, {
            target: url
        })
    },   
    get: function (api, callback) {
        if (typeof callback != "function") {
            console.error('callback is not function');
            return;
        }
        var url = config.url + api;
        console.log("get", url);
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
        console.log("post", url);
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
