
var crystalsArray =[];
var score = 0;
var wins = 0;
var losses = 0;
var roundScore = 0;
var randomNum = 0;
var randomValue = 0;

function reset(){
    roundScore = 0;
}

function crystals(type, value, pic) {
    this.type = type;
    this.value = value;
    this.pic= pic;
  }

//Initialize objects


var diamond = new crystals("diamond", randomValue,"./assets/images/dmd.jpg");
var ruby = new crystals("ruby",randomValue,"./assets/images/ruby.jpg");
var emerald = new crystals("emerald", randomValue,"./assets/images/emerald.jpg");
var saphire = new crystals("saphire", randomValue,"./assets/images/saphire.jpg");

crystalsArray.push(diamond,ruby, emerald, saphire);


for(var i = 0; i < crystalsArray.length;i++){
    randomValue = Math.floor(Math.random() * 12 +1);
    var crysPic = $("<img>");
    $(crysPic).addClass("img-thumbnail number");
    $(crysPic).attr("value", randomValue);
    $(crysPic).attr("src", crystalsArray[i].pic);
    $(crysPic).attr("style","width:130px");
    $("#crysDisplay").append(crysPic);
}



    $(".number").on("click", function(){
        roundScore = parseInt($(".number").attr("value"));
        score  += roundScore;
        console.log(roundScore);
        console.log(score);
        reset();
        console.log(roundScore);
    });

function checkForWin(){

}