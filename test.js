/**
 * Created by zhijian on 2017/2/17.
 */
var http = require("http");
var url = require("url");
var formidable = require("formidable");
var util = require("util");

http.createServer(function(req,res){
    if (req.url=='/upload'&&req.method.toLowerCase()=='post'){
        //parse a file upload
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.writeHead(200,{"content-Type":"text/palin"});
            res.write("Received upload:\n\n");
            res.end(util.inspect({fields:fields, files:fiels}));
        });

        return ;
    }

    res.writeHead(200,{"content-type":"text/html"});
    res.write('<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+'<input type="submit" value="Upload">'+
        '</form>'
    )
}).listen(8000)