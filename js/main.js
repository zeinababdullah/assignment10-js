var additionQutes = [
    {
        "qutes" : " “Be yourself; everyone else is already taken.” ",
        "auther" :" ― Oscar Wilde "
    },
    {
        "qutes" : " “So many books, so little time.” ",
        "auther" :" ― Frank Zappa "
    },
    {
        "qutes" : " “A room without books is like a body without a soul.” ",
        "auther" :" ― Marcus Tullius Cicero "
    },
    {
        "qutes" : " “Be yourself; everyone else is already taken.” ",
        "auther" :" ― Oscar Wilde "
    },
    {
        "qutes" : " “You only live once, but if you do it right, once is enough.” ",
        "auther" :" ― Mae West "
    }
];



function dispalyQute(){
    var randomNumber = Math.floor(Math.random() * additionQutes.length); 
    document.getElementById("newQutes").innerHTML=`<p class="fs-2">${additionQutes[randomNumber].qutes}
    <p class="fs-2">${additionQutes[randomNumber].auther}
    `;
}