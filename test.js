var axios = require('axios'); 
var http = require('http')
var https = require('https')

let   httpsProxyAgent = require('https-proxy-agent');
var agent = {
    http: new httpsProxyAgent(process.env.http_proxy),
    https: new httpsProxyAgent(process.env.http_proxy)
  }
var testApi = 'https://www.google.com';
agent.http.domain = testApi
agent.https.domain = testApi

var token = 'token'
console.log(agent)
var config = {
  baseURL: testApi,
  url: '/',
  agents: agent
  // headers:  { Authorization': "Bearer " + token }
}

var data = 'testdata'
axios.request(config).then((res) => console.log(res)).catch(err => console.log(err))
// http.createServer(function (req, res) {
//      res.setHeader('Content-Type', 'application/json;charset=utf-8');
//      res.end(JSON.stringify(data));
//    }).listen(4444, function () {
//      var httpAgent = new http.Agent();
//      axios.get(testApi, {
//        agents: {
//          http: httpAgent
//        }
//      }).then(function (res) {
//        console.log(res)
//      }).catch(function(err) {
//       console.error(err)
//      });
//    });
