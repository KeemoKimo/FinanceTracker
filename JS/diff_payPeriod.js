var isWclicked = false
var isBWclicked = false
var isMclicked = false

function weeklyPay(){
    isWclicked = true
    closeUI(isWclicked)
}

function bi_weeklyPay(){
    isBWclicked = true
    closeUI(isBWclicked)
}

function monthlyPay(){
    isMclicked = true
    closeUI(isMclicked)
}

function closeUI(whichClick){
    var toRet = 0
    if(isWclicked){
        toRet = 1
    }else if(isBWclicked){
        toRet = 2
    }else if(isMclicked){
        toRet = 4
    }
    document.getElementById("payPeriod").style.display = "none"
    document.getElementsByClassName("div_down")[0].style.display = "block"
    document.getElementById("textTest").innerHTML = toRet
}