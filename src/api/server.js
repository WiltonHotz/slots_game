const http = require('http'),
        fs = require('fs');
const port = process.env.PORT || 8000;
const SlotsData = require('../service-handlers/slots/slots_data');
const slotsBrain = require("../service-handlers/slots/slots_brain")

async function spin()  {
    slotsData.imgReels = await slotsBrain.spinReels(slotsData.reels, slotsData.imgReels)
    slotsData.paylineMatches = await slotsBrain.setPaylineMatches(slotsData.reels, slotsData.currentBet);
    slotsData.multipliers = await slotsBrain.calculatePayouts(slotsData.paylineMatches)
    let sum = slotsData.multipliers.reduce((a,b) => a+b) * 0.05;
    slotsData.currentBalance -= slotsData.currentBet;
    slotsData.currentBalance += sum;

    console.log(slotsData.paylineMatches)
    console.log(slotsData.multipliers)
    console.log('sum: ' + sum)
    console.log('balance: ' + slotsData.currentBalance)

    return sum;
}

async function addNewData(slotsData, sum, error) {
    let newDataJson = {
        'balance' : slotsData.currentBalance,
        'bet' : slotsData.currentBet,
        'sum' : sum,
        'payline1' : slotsData.multipliers[0]*0.05 || 0,
        'payline2' : slotsData.multipliers[1]*0.05 || 0,
        'payline3' : slotsData.multipliers[2]*0.05 || 0,
        'payline4' : slotsData.multipliers[3]*0.05 || 0,
        'payline5' : slotsData.multipliers[4]*0.05 || 0,
        'reel1' : slotsData.imgReels[0],
        'reel1Length' : slotsData.imgReels[0].length,
        'reel2' : slotsData.imgReels[1],
        'reel2Length' : slotsData.imgReels[1].length,
        'reel3' : slotsData.imgReels[2],
        'reel3Length' : slotsData.imgReels[2].length,
        'error' : error,
    };
    return newDataJson;
}

// Create an instance of the http server to handle HTTP requests
var server = http.createServer(function () {});

server.on('request', async (request, response) => {
    const { method, url } = request;
    console.log(method);
    if (url == '/' || url == '/index.html') {
        var fileStream = fs.createReadStream('./index.html');
        fileStream.pipe(response);
    } else if((url.includes('/start'))) {

        slotsData = new SlotsData();
        slotsData.reels = await slotsBrain.initiateReels();
        slotsData.imgReels = await slotsBrain.setImgReels(slotsData.reels);
        var sum = 0;
        var error = '';
        console.log('slotsdata new game: ' + slotsData.toString())

        var newDataJson = await addNewData(slotsData, sum, error)

        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(newDataJson));

        response.end();

    } else if((url.includes('/spin'))) {

        await request.on('data', function (data) {
            var {balance, bet} = JSON.parse(data);
            slotsData.currentBalance = balance;
            slotsData.currentBet = bet;
            console.log('slotsdata pre-spin: ' + slotsData.toString())       
        });

        if(slotsData.currentBet <= slotsData.currentBalance) {
            var sum = await spin() 
            var error = '';
        } else {
            var sum = 0;
            var error = 'Insufficient funds!'
        }

        console.log('slotsdata post-spin: ' + slotsData.toString())

        var newDataJson = await addNewData(slotsData, sum, error)

        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(newDataJson));
        response.end();
    }
    else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("Server Not Found\n");
    }
  });

// Start the server on port 8000
server.listen(port, '127.0.0.1');
console.log('Node server running on port 8000');