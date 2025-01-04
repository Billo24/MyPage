var http = require("http"); 
const port = 8000; 

// Bill Horrill Web App, 1/4/2025 public

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bill Horril Webpage");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
