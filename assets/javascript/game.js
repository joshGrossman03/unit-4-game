var crystalsArray =[];
var score = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;
var diamond;
var ruby;
var emerald;
var saphire;
var roundScore;

function game(){
    
    $("#hideMe").hide();
    $("#mainGame").show();
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
        $(crysPic).addClass(crystalsArray[i].type);
        $(crysPic).attr("value", crystalsArray[i].value);
        $(crysPic).attr("src", crystalsArray[i].pic);
        $(crysPic).attr("style","width:130px");
        $("#crysDisplay").append(crysPic);
    }


    
    $(".number").on("click", function(){
        var roundScore = parseInt($(this).attr("value"));
        $("#valueCrys").html("Crystal Value: "+ roundScore);
        score = (parseInt(score)+ parseInt(roundScore));
        $("#currentTotal").html("Your Current Total: "+ score);
        roundScore = 0;
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
    game();
    
}

function gameReset(){
    losses = 0;
    wins = 0;
    randomNum = 0;
    $("#gameMessages").empty();
    $("#losses").html("Losses: " + losses);
    $("#wins").html("Wins: " + wins);
    $("#numberRandom").html("Random Number: " + randomNum);
    

}


function checkForWin(){
    
    if (losses > 9 ){
        $("#gameMessages").html("GAME OVER :("); 
        $("#hideMe").show();
        $("#mainGame").hide();
        

    }
    
    else if(score < randomNum){
        $("#gameMessages").html("Click another crystal <br> to keep going!");
        roundScore = 0;  
        }
    else if (score > randomNum){
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#gameMessages").html("You Lost The Round :(");
        reset();
        }
    else if(score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#gameMessages").html("You Won This Round!");
        reset();
      
        
        }
    }

    $("#startGame").on("click", function(){
        game();
        $("#startGame").hide();
    });
   
    $("#restart").on("click", function(){
        reset();
        gameReset();
        $("#hideMe").hide();
        $("#mainGame").show();
    });


