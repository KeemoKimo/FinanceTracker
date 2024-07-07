function searchFunction() {
    var textbox = document.getElementById("txtSearch").value
    console.log(textbox)
}

function scrollToView() {
    document.getElementById("addDataDiv").style.display = "block"
    document.getElementById("addDataDiv").scrollIntoView()
}


function insertTableData(dateStart, dateEnd, income, expenses, savings, invested){
    var table = document.getElementById("tblData")
    var row = table.insertRow(1)
    var cellDate = row.insertCell(0)
    var cellIncome = row.insertCell(1)
    var cellExpenses = row.insertCell(2)
    var cellBalance = row.insertCell(3)
    cellDate.innerHTML = dateStart + " to " + dateEnd
    cellIncome.innerHTML = "$ " + income
    cellExpenses.innerHTML = "$ " + expenses
    cellBalance.innerHTML = "<b>$ " + (Number(income) - Number(expenses)) + "</b>"
    if((Number(income) - Number(expenses)) > 0){
        row.style.background = "#ADF6B1"
    }else if((Number(income) - Number(expenses)) < 0){
        row.style.background = "#FF4B3E"
    }
}

function addEntry() {
    var dateStart = document.getElementById("dateStart").value
    var dateEnd = document.getElementById("dateEnd").value
    var income = document.getElementById("txtIncome").value
    var expenses = document.getElementById("txtExpenses").value
    var savings = document.getElementById("txtSavings").value
    var invested = document.getElementById("txtInvested").value
    if (dateStart === "" || dateEnd === "" || income === "" || expenses === "" || savings === "" || invested === "") {
       alert("Please Enter in all the fields!")
    } else {
        if(dateStart > dateEnd){
            alert("Start date cannot be bigger than end date!")
        }else{
            document.getElementById("tr_Default").style.display = "none"
            insertTableData(dateStart, dateEnd, income, expenses, savings, invested)
            document.getElementById("addDataDiv").style.display = "none"
        }
    }
}
