var rank = document.querySelector("#pRank").innerHTML;
var emblems = ["/img/divisionEmblems/iron.png", "/img/divisionEmblems/bronze.png", "/img/divisionEmblems/silver.png", "/img/divisionEmblems/gold.png", "/img/divisionEmblems/platinum.png", "/img/divisionEmblems/diamond.png", "/img/divisionEmblems/master.png", "/img/divisionEmblems/grandmaster.png", "/img/divisionEmblems/challenger.png"];
var displayImageURL;


const subinfoleft = document.getElementById("leftBox");
var subinfoElement = document.createElement("div");
subinfoElement.id = "imgDiv";
subinfoElement.appendChild(subinfoleft);

if(rank=="Iron")        {displayImageURL = emblems[0];}
if(rank=="Bronze")      {displayImageURL = emblems[1];}
if(rank=="Silver")      {displayImageURL = emblems[2];}
if(rank=="Gold")        {displayImageURL = emblems[3];}
if(rank=="Platinum")    {displayImageURL = emblems[4];}
if(rank=="Diamond")     {displayImageURL = emblems[5];}
if(rank=="Master")      {displayImageURL = emblems[6];}
if(rank=="Grandmaster") {displayImageURL = emblems[7];}
if(rank=="Challenger")  {displayImageURL = emblems[8];}