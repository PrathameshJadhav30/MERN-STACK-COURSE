fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => response.json())
    .then(data => {
        console.log("Bitcoin Price in USD:", data.bpi.USD.rate);
    });
