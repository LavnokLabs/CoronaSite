console.log("Holy Shit!!. This is working");
var request = new XMLHttpRequest();
request.open('GET', 'https://api.covid19india.org/data.json', true);
request.onload = function () {
    console.log("this too");
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

        console.log(data.statewise);
        document.getElementById("indiaActiveCount").innerHTML = data.statewise[0].active;
        document.getElementById("indiaDeadCount").innerHTML = data.statewise[0].deaths;
        var cured=data.statewise[0].confirmed-data.statewise[0].active-data.statewise[0].deaths;
        document.getElementById("indiaCuredCount").innerHTML = cured;
        data.statewise.forEach(item => {

            console.log(item.active);
        });



    } else {
        console.log("error");
    }
}
request.send();