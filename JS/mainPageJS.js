var totalAddCounter = 0
var firstDate

function searchFunction() {
    var textbox = document.getElementById("txtSearch").value
    console.log(textbox)
}

function scrollToView() {
    document.getElementById("addDataDiv").style.display = "block"
    document.getElementById("addDataDiv").scrollIntoView()
    if (totalAddCounter != 0) {
        document.getElementById("txtFirstPay").innerHTML = "Current Pay Day"
        document.getElementById("dateStart").disabled = true
        var newDate
        if (document.getElementById("textTest").innerText == 1) {
            var currDate = new Date(firstDate)
            newDate = new Date(firstDate).setDate(currDate.getDate() + 7)
            updatedDate = new Date(newDate).toISOString().slice(0, 10)
            firstDate = newDate
            document.getElementById("dateStart").value = updatedDate
        } else if (document.getElementById("textTest").innerText == 2) {
            var currDate = new Date(firstDate)
            newDate = new Date(firstDate).setDate(currDate.getDate() + 14)
            updatedDate = new Date(newDate).toISOString().slice(0, 10)
            firstDate = newDate
            document.getElementById("dateStart").value = updatedDate
        }
        else if (document.getElementById("textTest").innerText == 4) {
            var currDate = new Date(firstDate)
            newDate = new Date(firstDate).setDate(currDate.getDate() + 30)
            updatedDate = new Date(newDate).toISOString().slice(0, 10)
            firstDate = newDate
            document.getElementById("dateStart").value = updatedDate
        }
    }
}


function switchToSavingsView() {
    if (document.getElementById("pSwitchTable").innerHTML == "Switch to Saving/Investing View") {
        document.getElementById("pSwitchTable").innerHTML = "Switch to Income/Expenses View"
        document.getElementById("tblData").style.display = "none"
        document.getElementById("tblSavings").style.display = "table"
    } else {
        document.getElementById("pSwitchTable").innerHTML = "Switch to Saving/Investing View"
        document.getElementById("tblData").style.display = "table"
        document.getElementById("tblSavings").style.display = "none"

    }
}

function insertTableData(dateStart, income, expenses, savings, invested) {
    var table = document.getElementById("tblData")
    var row = table.insertRow(1)
    var cellDate = row.insertCell(0)
    var cellIncome = row.insertCell(1)
    var cellExpenses = row.insertCell(2)
    var cellBalance = row.insertCell(3)
    cellDate.innerHTML = dateStart
    cellIncome.innerHTML = "$ " + income
    cellExpenses.innerHTML = "$ " + expenses
    cellBalance.innerHTML = "<b>$ " + (Number(income) - Number(expenses)).toFixed(2) + "</b>"
    if ((Number(income) - Number(expenses)) > 0) {
        row.style.background = "#ADF6B1"
    } else if ((Number(income) - Number(expenses)) < 0) {
        row.style.background = "#FF4B3E"
    }
    //Insert value for savings / investing table
    var tblSavings = document.getElementById("tblSavings")
    var rowSavings = tblSavings.insertRow(1)
    var cellDateSavings = rowSavings.insertCell(0)
    var cellSavings = rowSavings.insertCell(1)
    var cellInvested = rowSavings.insertCell(2)
    cellDateSavings.innerHTML = dateStart
    cellSavings.innerHTML = "$ " + savings
    cellInvested.innerHTML = "$ " + invested
    totalAddCounter++
    console.log(totalAddCounter)
}

function addEntry() {
    var dateStart = document.getElementById("dateStart").value
    var income = document.getElementById("txtIncome").value
    var expenses = document.getElementById("txtExpenses").value
    var savings = document.getElementById("txtSavings").value
    var invested = document.getElementById("txtInvested").value
    if (dateStart === "" || income === "" || expenses === "" || savings === "" || invested === "") {
        alert("Please Enter in all the fields!")
    } else {
        if (Number(income) < (Number(savings) + Number(invested))) {
            alert("Your cannot SAVE and INVEST more than your income!")
        } else {
            document.getElementById("tr_Default").style.display = "none"
            document.getElementById("tr_Default_savings").style.display = "none"
            firstDate = dateStart
            insertTableData(dateStart, income, expenses, savings, invested)
            document.getElementById("addDataDiv").style.display = "none"
            GetCellValues()
        }
    }
}

function clearAddDataDiv() {
    document.getElementById("dateStart").value = ""
    document.getElementById("txtIncome").value = ""
    document.getElementById("txtExpenses").value = ""
    document.getElementById("txtSavings").value = ""
    document.getElementById("txtInvested").value = ""
}