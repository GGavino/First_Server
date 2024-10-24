const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

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
    var teste = new Set();
    var n = 0;
    for (let i = 1; i <= 5; i++) {
        while(teste.size < i){
            n = getRandomNumber(1, 50);
            teste.add(n);
        }
        chave[`numero${i}`] = n;
    }
    for (let i = 6; i <= 7; i++) {
        while(teste.size < i){
            n = getRandomNumber(1, 12);
            teste.add(n);
        }
        chave[`numero${i}`] = n;
    }
    return chave; // Ensure the function returns the updated chave object
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/generate-key', (req, res) => {
    try {
        chave = genRandonKey();
        console.log('Generated chave:', chave); // Log the generated chave
        res.json(chave); // Use res.json to send JSON response
    } catch (error) {
        console.error('Error generating key:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});