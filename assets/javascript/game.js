
var crystalsArray =[];

function crystals(type, value, pic) {
    this.type = type;
    this.value = value;
    this.pic= pic;
  }
//Initialize objects
var diamond = new crystals("diamond", Math.floor(Math.random *12 +1),"./assets/images/dmd.jpg");
var ruby = new crystals("ruby",Math.floor(Math.random *12 +1),"./assets/images/ruby.jpg");
var emerald = new crystals("emerald", Math.floor(Math.random *12 +1),"./assets/images/emerald.jpg");
var saphire = new crystals("saphire", Math.floor(Math.random *12 +1),"./assets/images/saphire.png");

crystalsArray.push(diamond,ruby, emerald, saphire);


for(i = 0; i<crystalsArray.length;i++){
    var crysPic = $("<img>");
    $(crysPic).addClass("img-thumbnail");
    $(crysPic).attr("data-number", crystalsArray[i].value);
    $(crysPic).attr("src", crystalsArray[i].pic);
    $(crysPic).attr("style","width:150px");
    $("#crysDisplay").append(crysPic);
}
