// returns a full railrat url based
// on the input train number (string)
function railRatURL(trainNumber){
    return `https://railrat.net/trains/${trainNumber}/`;
}

// exporting to server.js if needed
module.exports = {
    railRatURL
}