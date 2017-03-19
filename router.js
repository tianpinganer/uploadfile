/**
 * Created by zhijian on 2017/2/9.
 */
function route(handle,pathName,response,resquest){
    console.log("About to route a request for " + pathName);
    if(typeof handle[pathName]==='function'){
        handle[pathName](response,resquest);
    }else{
        console.log("No request handler found for " + pathName);
        response.writeHead(404,{"content-Type":"text/html"});
        response.write("404 Not found!");
        response.end();
    }
}

exports.route=route;