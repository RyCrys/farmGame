time = document.getElementsByClassName('Day');
document.getElementById("Day").innerHTML = "1";

day = 1;
timeH = 12;
timeM = 0;
workers = 0;
workLoak = 0;
money = 1000;
game = true;
plot2 = false;
plot3 = false;

cornPrice = 8;
wheatPrice = 3;

plotSelected = 0;
plotExpon = [1,2.3,1.7]
update();

function update(){
    //Time Ribbons
    document.getElementById("Day").innerHTML = day;
    if(timeM < 10){
        document.getElementById("Time").innerHTML = timeH + ":0" + timeM;
    } else {
        document.getElementById("Time").innerHTML = timeH + ":" + timeM;
    }

    if(timeM >= 60){
        timeM = 0;
        if(timeH >= 23){
            timeH = 0;
            day++;

        }
        if(workers > 0){
            cost = workers*15;
            money = money - cost;
            context("Worker Expenses -$" + cost)
        }
        timeH++;
    }

    document.getElementById("Money").innerHTML = money;
    document.getElementById("Workers").innerHTML = workers;
    //End Time Ribbons
}

function context(x){
    document.getElementById("Context").innerHTML = x;

}
function infinite(){
    setTimeout(function(){
        infinite();
        timeM++;
        update();
    }, 1000);
}
function cropPrice() {
    setTimeout(function () {
        cropPrice();
        cropPriceUpdate();
        update();
    }, 600);
}

function random(num, bool) {
    let num2 = Math.floor(Math.random() * num) + 1;
    
    if (bool) {
        let posNeg = Math.floor(Math.random() * 2) + 1;
        console.log("Positive(1) or Negative(2): " + posNeg);
        
        if (posNeg === 2) {
            num2 = -num2; 
        }
    }

    console.log("Random number: " + num2);
    return num2;
}

function cropPriceUpdate() {
    wheatPrice += random(2, true);
    if(wheatPrice < 1){
        wheatPrice = 1;
    }
    cornPrice += random(3, true);
    if(cornPrice < 1){
        cornPrice = 1;
    }
}
cropPrice()
function farm1(){
    sideClear();
    plotSelected =1;
    document.getElementById("Crops").style.visibility = "visible";
    document.getElementById("topText").innerHTML = "Plot One";
    document.getElementById("Buy").style.visibility = "hidden";

    
}

function farm2(){
    sideClear();
    plotSelected =2;
    if(plot2 == false){
         document.getElementById("topText").innerHTML = "Plot Two";
         document.getElementById("sideContext").innerHTML ="Would you like to buy the plot for $1000";
         document.getElementById("Buy").style.visibility = "visible";
         document.getElementById("Crops").style.visibility = "hidden";

        }else{
            document.getElementById("Crops").style.visibility = "visible";
            document.getElementById("topText").innerHTML = "Plot Two";
    }
}

function farm3(){
    sideClear();
    plotSelected =3;
    if(plot3 == false){
         document.getElementById("topText").innerHTML = "Plot Three";
         document.getElementById("sideContext").innerHTML ="Would you like to buy the plot for $1500";
         document.getElementById("Buy").style.visibility = "visible";
         document.getElementById("Crops").style.visibility = "hidden";

        }else{
        document.getElementById("Crops").style.visibility = "visible";
        document.getElementById("topText").innerHTML = "Plot Three";
    }
}

function buy(){
    plotType = document.getElementById("topText").textContent;
    if (plotType == "Plot Two"){
        if(money >=1000){
            money = money - 1000;
            plot2 = true;
            context("Plot Two Bought");
            document.getElementById("sideContext").innerHTML = "Plot Two Bought";
            document.getElementById("Buy").style.visibility = "hidden";
            document.getElementById("f2T").innerHTML = "Click To Crop";

        }else{
            context("Not Enought Money");
            document.getElementById("Buy").style.backgroundColor = "Red";
        }
    }
    if(plotType == "Plot Three"){
        if(money >=1500){
            money = money - 1500;
            plot3 = true;
            context("Plot Three Bought");
            document.getElementById("Buy").style.visibility = "hidden";
            document.getElementById("f3T").innerHTML = "Click To Crop";
            document.getElementById("sideContext").innerHTML = "Plot Three Bought";

        } else{
            context("Not Enought Money");
            document.getElementById("Buy").style.backgroundColor = "Red";
        }
    }
}

function sideClear(){
    document.getElementById("topText").innerHTML = "";
    document.getElementById("Buy").style.visibility = "hidden";
    document.getElementById("sideContext").innerHTML = "";
    document.getElementById("Buy").style.backgroundColor = "rgb(6, 195, 6)";
}

function grow(type){
    if(type == "Wheat"){
        document.getElementById("f1T").innerHTML = "Growing Wheat";
        document.getElementById("time"+ plotSelected).style.visibility = "visible";
    } else if(type == "Corn"){
        document.getElementById("f1T").innerHTML = "Growing Corn";
    }
}
infinite();
