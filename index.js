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

function farm1(){
    sideClear();
    document.getElementById("Crops").style.visibility = "visible";
    document.getElementById("topText").innerHTML = "Plot One";
    document.getElementById("Buy").style.visibility = "hidden";

    
}

function farm2(){
    sideClear();
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
infinite();