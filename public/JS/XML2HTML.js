// For retrieving Herbew XML data

var xhttpHeb;
xhttpHeb = new XMLHttpRequest();
xhttpHeb.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunctionHeb(this);
    }
};


xhttpHeb.open("GET", "/XML/PutACurseOnMyEnemy.xml", true);
xhttpHeb.send();

function myFunctionHeb(xml) {
    var x, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";

    var textCounter = 0;
    var htmlOutput = "poemHebrew1";
    var tempNum = "";

    //Get every line from the XML file
    x = xmlDoc.getElementsByTagName("l");


    for (i = 0; i < x.length; i++) { 
        txt += "<p class = \"lines\">"+ x[i].childNodes[0].nodeValue + "</p>";

        //Every third line, jump to next tr
        if((i+1)%3==0){
            textCounter++;
            tempNum = textCounter.toString();
            htmlOutput = "poemHebrew"+tempNum;

            document.getElementById(htmlOutput).innerHTML = txt;
            txt = "";
        }
    }
}

//For retrieving English XML data
var xhttpEng;
xhttpEng = new XMLHttpRequest();
xhttpEng.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunctionEng(this);
    }
};
xhttpEng.open("GET", "/XML/PutACurseOnMyEnemyEng.xml", true);
xhttpEng.send();


function myFunctionEng(xml) {
    var x, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";

    var textCounter = 0;
    var htmlOutput = "poemEnglish1";
    var tempNum = "";

    x = xmlDoc.getElementsByTagName("l");

    for (i = 0; i < x.length; i++) { 

        if((i+1)%3==0){
            txt += "<p class = \"lines\"><i>"+ x[i].childNodes[0].nodeValue + "</i></p>";
        }
        else{
            txt += "<p class = \"lines\">"+ x[i].childNodes[0].nodeValue + "</p>";
        }

        if((i+1)%3==0){
            textCounter++;
            tempNum = textCounter.toString();
            htmlOutput = "poemEnglish"+tempNum;

            document.getElementById(htmlOutput).innerHTML = txt;
            txt = "";
        }
    }
}




