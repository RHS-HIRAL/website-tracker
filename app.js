//This code is made to check if a certain website contains a special keyword or keywords.
// I made this website to check if the results are uploaded on the GTU Website.

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
