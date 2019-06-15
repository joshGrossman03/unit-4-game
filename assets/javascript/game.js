
var crystalsArray =[];


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


for(i = 0; i<crystalsArray.length;i++){
    var randomValue = Math.floor(Math.random() * 12 +1);
    var crysPic = $("<img>");
    $(crysPic).addClass("img-thumbnail");
    $(crysPic).attr("data-number", randomValue);
    $(crysPic).attr("src", crystalsArray[i].pic);
    $(crysPic).attr("style","width:130px");
    $("#crysDisplay").append(crysPic);
}
