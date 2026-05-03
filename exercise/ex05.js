let count = 0;
let colors = ["LightBlue", "Olive", "Thistle", "Tan"]; 

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
   $("body").css("background-color", colors[count]);
   count = count + 1;

   if (count==4) {
    count=0; 
    console.log("it happened");
 } 

 if (colors [count]=="HotPink") {
    $("#needy-button").after
    ("You Succ")
 }
 else if (colors [count]=="Orchid") {
    $("#needy-button").after
    ("We Succ")
 }
 
 else{
$("#needy-button").after
    ("I Succ");
 }
if (count > 5 ) {mood="fresh and happy"; }

if (count >= 5 && count <10 ) {mood="keep pushing" ;}

console.log(mood)

});
