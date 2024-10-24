const http = require("http");
const host = 'localhost';
const port = 8000;


var chave = {
    "numero1": 0,
    "numero2": 0,
    "numero3": 0,
    "numero4": 0,
    "numero5": 0,
    "numero6": 0,
    "numero7": 0
};

// Function to generate random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

// Function to generate random values and assign them to chave object
function genRandonKey() {
    var teste = new Set;
    var n = 0;
    for (let i = 1; i <= 5; i++) {
        while(teste.size < i){
            n = getRandomNumber(1, 50);
            teste.add(n)
        }
        chave[`numero${i}`] = n
    }
    for (let i = 6; i <= 7; i++) {
        while(teste.size < i){
            n = getRandomNumber(1, 12);
            teste.add(n)
        }
        chave[`numero${i}`] = n 
    }
}

const requestListener = function (req, res) {
    // Set CORS headers to allow access from any origin
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow certain HTTP methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");
    genRandonKey();
    res.end(JSON.stringify(chave))
    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});