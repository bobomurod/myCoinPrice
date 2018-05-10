const request = require('request')

request('https://api.coinmarketcap.com/v2/ticker/1/', function(error, response, bosy){
    if (!error && response.statusCode == 200) {
        var jsonArr = JSON.parse(body);
        console.log(jsonArr.data.quotes.USD.price)
    }
})