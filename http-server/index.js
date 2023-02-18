let args = process.argv;
const aa=args[3];
const cc=Number(aa)

const http=require('http');
const fs=require('fs');
function onRequest(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/'){
        fs.readFile('./project.html',null,function(err,data){
            if(err){
                response.writeHead(404);
                response.write('file not fount');
            }else{
                response.write(data);
            }
            response.end();
        });
    }
    if(request.url=='/registration'){
        fs.readFile('./registration.html',null,function(err,data){
            if(err){
                response.writeHead(404);
                response.write('file not fount');
            }else{
                response.write(data);
            }
            response.end();
        });
    }
}
http.createServer(onRequest).listen(cc);