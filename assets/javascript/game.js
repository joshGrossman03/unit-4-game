var crystalsArray =[];
var score = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;
var diamond;
var ruby;
var emerald;
var saphire;
var roundScore = 0;

function game(){
    
    
    //when we reset the game we want to reset the random number and crystals
    randomNum = Math.floor(Math.random() * 12 +39);
    $("#numberRandom").html("Random Number: " + randomNum);

    diamond = new crystals("diamond", "./assets/images/dmd.jpg");
    ruby = new crystals("ruby", "./assets/images/ruby.jpg");
    emerald = new crystals("emerald", "./assets/images/emerald.jpg");
    saphire = new crystals("saphire", "./assets/images/saphire.jpg");
    crystalsArray.push(diamond,ruby, emerald, saphire);
    for(var i = 0; i < crystalsArray.length;i++){
        // randomValue = Math.floor(Math.random() * 12 +1);
        var crysPic = $("<img>");
        $(crysPic).addClass("img-thumbnail number");
        $(crysPic).attr("value", crystalsArray[i].value);
        $(crysPic).attr("src", crystalsArray[i].pic);
        $(crysPic).attr("style","width:130px");
        $("#crysDisplay").append(crysPic);
    }
    $(".number").on("click", function(){
        roundScore = parseInt($(".number").attr("value"));
        $("#valueCrys").html("Crystal Value: "+ roundScore);
        score = (parseInt(score)+ parseInt(roundScore));
        $("#currentTotal").html("Your Current Total: "+ score);
        console.log(roundScore);
        console.log(score);
        console.log(randomNum);
        checkForWin();
    });
   
}

    function crystals(type, pic) {
        this.type = type;
        this.value = Math.floor(Math.random() * 12 +1);
        this.pic= pic;
    }

//Initialize objects

function reset() {
    $("#crysDisplay").empty();
    score = 0;
    $("#currentTotal").html("Your Current Total: "+ score);
    crystalsArray =[];
    roundScore = 0;
    $("#valueCrys").html("Crystal Value: "+ roundScore);
    game()
}


function checkForWin(){
    if(score < randomNum){
        $("#gameMessages").html("Click another crystal <br> to keep going!");
             
        }
    else if (score > randomNum){
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#gameMessages").html("You Lost The Round :(");
        reset()
      
        
        }
    else if(score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#gameMessages").html("You Won This Round!");
        reset()
      
        
        }
    }

game();


