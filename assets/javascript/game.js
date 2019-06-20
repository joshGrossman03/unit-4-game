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
var ambient = new Audio('./assets/audio/ambient.mp3');



$("#hideMe").hide();
$("#mainGame").hide();
$(".view").hide();


function game(){
    $(".view").show();
    ambient.play();
    $("#hideMe").hide();
    $("#mainGame").show();
    //when we reset the game we want to reset the random number and crystals
    randomNum = Math.floor(Math.random() * 12 +39);
    $("#numberRandom").html("Random Number: " + randomNum);
    //initialize objects
    diamond = new crystals("diamond", "./assets/images/dmd.jpg");
    ruby = new crystals("ruby", "./assets/images/ruby.jpg");
    emerald = new crystals("emerald", "./assets/images/emerald.jpg");
    saphire = new crystals("saphire", "./assets/images/saphire.jpg");
    crystalsArray.push(diamond,ruby, emerald, saphire);
    //for loop to display crystal object on document and assign type, value and picture attributes to each element
    for(var i = 0; i < crystalsArray.length;i++){

        var crysPic = $("<img>");
        $(crysPic).addClass("img-thumbnail number");
        $(crysPic).addClass(crystalsArray[i].type);
        $(crysPic).attr("value", crystalsArray[i].value);
        $(crysPic).attr("src", crystalsArray[i].pic);
        $(crysPic).attr("style","width:130px");
        $("#crysDisplay").append(crysPic);
    }

//event grabs value of crystal adds to score  variable then calls checkForWin function
    
    $(".number").on("click", function(){
        $("#gameTitle").hide();
        var roundScore = parseInt($(this).attr("value"));
        //$("#valueCrys").html("Crystal Value: "+ roundScore);
        score = (parseInt(score)+ parseInt(roundScore));
        $("#currentTotal").html("Your Current Total: "+ score);
        roundScore = 0;
        console.log(roundScore);
        console.log(score);
        console.log(randomNum);
        checkForWin();
    });  
   
}
//constructor function
    function crystals(type, pic) {
        this.type = type;
        this.value = Math.floor(Math.random() * 12 +1);
        this.pic= pic;
    }

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
    $("#crysDisplay").empty();
    score = 0;
    $("#currentTotal").html("Your Current Total: "+ score);
    crystalsArray =[];
    roundScore = 0;
    $("#valueCrys").html("Crystal Value: "+ roundScore);
    $("#gameMessages").empty();
    $("#losses").html("Losses: " + losses);
    $("#wins").html("Wins: " + wins);
    $("#numberRandom").html("Random Number: " + randomNum);
}


function checkForWin(){
    
    if (losses > 9 ){
        $(".view").hide();
        $("#gameMessages").html("GAME <br> OVER"); 
        $("#mainGame").hide();
        $("#hideMe").show();
        var gameOverPic = $("<img>");
        $(gameOverPic).addClass("img-thumbnail");
        $(gameOverPic).attr("src", "./assets/images/gameover.gif");
        $(gameOverPic).attr("style","width:400px");
        $("#gameOver").append(gameOverPic);
        ambient.pause();

    }
    
    else if(score < randomNum){
        $("#gameMessages").html("Click another crystal <br> to keep going!");
        roundScore = 0;  
        }
    else if (score > randomNum){
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#gameMessages").html("You Lost <br> The Round :(");
        reset();
        }
    else if(score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#gameMessages").html("You Won <br> This Round!");
        reset();
        }
    }

    // onClick events for start and restart buttons

    $("#startGame").on("click", function(){
        game();
        $("#startGame").hide();
        $("#mainGame").show();
        
    });

    $("#modalOkButton").click( function(){
        $("#startButton").hide();
    })
   
    $("#restart").on("click", function(){
        reset();
        gameReset();
        $("#hideMe").hide();
        $("#mainGame").show();
        $("#startGame").show();
    });


