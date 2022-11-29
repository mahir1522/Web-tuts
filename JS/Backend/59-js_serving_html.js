const http = require('http')
const fs = require('fs')

const file = fs.readFileSync('31-CSS_animation.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-tye':'text/html'})
    res.end(file)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log('listening on port 80');
})