/**
 * Created by zhijian on 2017/2/8.
 */
var http = require("http");
var url = require("url");
var formidable = require("formidable");
var util = require("util");

function start(route,handle){
    function onRequest(request,response){
        var pathName = url.parse(request.url).pathname;
        console.log("Reuqest for "+ pathName + "received!");
        route(handle,pathName,response,request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started!");
}

exports.start=start;