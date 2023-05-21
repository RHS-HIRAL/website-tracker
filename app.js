const axios = require('axios');

var urlresult = "https://www.gturesults.in";

function monitorChange(){
    axios
    .get(urlresult)
    .then((res) => {
        if(res.data.includes('BE SEM 1 - Regular')){
            console.log('Result is out');
        }
        else{
            console.log('Results are pending');
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

setInterval(monitorChange, 10000);
console.log("Starting page monitoring...");