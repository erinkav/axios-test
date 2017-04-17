var axios = require('axios'); 
var http = require('http')

let   httpsProxyAgent = require('https-proxy-agent');
var agent = new httpsProxyAgent(process.env.https_proxy);
var testApi = 'https://localhost:9000';
var token = 'token'
// console.log(agent)
var config = {
  baseUrl: testApi,
  url: '/',
  httpAgent: agent
  // headers:  { 'Authorization': "Bearer " + token }
}
axios.request(config).then((res) => console.log(res)).catch(err => console.log(err))
