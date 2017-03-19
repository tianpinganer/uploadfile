/**
 * Created by zhijian on 2017/2/9.
 */
var  querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response,request){
    console.log("Request handler 'start' was called.");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+'</html>';

    response.writeHead(200,{"content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response,request){
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse!");
    form.parse(request,function(error,fields,files){
        console.log("parse done");
        fs.renameSync(files.upload.path,"/resource/2.jpg");
        response.writeHead(200,{"content-Type":"text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response,request){
    console.log("Request handler 'show' was called.");
    fs.readFile("/resource/2.jpg","binary",function(error,file){
        if(error){
            response.writeHead(500,{"content-Type":"text/plain"});
            response.write(error+"\n");
            response.end();
        }else {
            response.writeHead(200,{"content-Type":"image/jpg"});
            response.write(file,"binary");
            response.end();
        }
    });
}

exports.start=start;
exports.upload=upload;
exports.show=show;



