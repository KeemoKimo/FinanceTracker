function searchFunction() {
    var textbox = document.getElementById("txtSearch").value
    console.log(textbox)
}

function scrollToView() {
    document.getElementById("addDataDiv").style.display = "block"
    document.getElementById("addDataDiv").scrollIntoView()
}

function addEntry() {
    var dateStart = document.getElementById("dateStart").value
    var dateEnd = document.getElementById("dateEnd").value
    var income = document.getElementById("txtIncome").value
    var expenses = document.getElementById("txtExpenses").value
    var savings = document.getElementById("txtSavings").value
    var invested = document.getElementById("txtInvested").value
    console.log(dateStart)
    console.log(dateEnd)
    console.log(income)
    console.log(expenses)
    console.log(savings)
    console.log(invested)
    if (dateStart === "" || dateEnd === "" || income === "" || expenses === "" || savings === "" || invested === "") {
       alert("Please Enter in all the fields!")
    } else {
        if(dateStart > dateEnd){
            alert("Start date cannot be bigger than end date!")
        }else{
            console.log("Date Check Pass")
        }
    }
}