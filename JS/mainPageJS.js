function searchFunction() {
    var textbox = document.getElementById("txtSearch").value
    console.log(textbox)
}

function scrollToView() {
    document.getElementById("addDataDiv").style.display = "block"
    document.getElementById("addDataDiv").scrollIntoView()
}

function switchToSavingsView(){
    if(document.getElementById("pSwitchTable").innerHTML == "Switch to Saving/Investing View"){
        document.getElementById("pSwitchTable").innerHTML = "Switch to Income/Expenses View"
        document.getElementById("tblData").style.display = "none"
        document.getElementById("tblSavings").style.display = "table"
    }else{
        document.getElementById("pSwitchTable").innerHTML = "Switch to Saving/Investing View"
        document.getElementById("tblData").style.display = "table"
        document.getElementById("tblSavings").style.display = "none"

    }
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
    cellBalance.innerHTML = "<b>$ " + (Number(income) - Number(expenses)).toFixed(2) + "</b>"
    if((Number(income) - Number(expenses)) > 0){
        row.style.background = "#ADF6B1"
    }else if((Number(income) - Number(expenses)) < 0){
        row.style.background = "#FF4B3E"
    }
    //Insert value for savings / investing table
    var tblSavings = document.getElementById("tblSavings")
    var rowSavings = tblSavings.insertRow(1)
    var cellDateSavings = rowSavings.insertCell(0)
    var cellSavings = rowSavings.insertCell(1)
    var cellInvested = rowSavings.insertCell(2)
    cellDateSavings.innerHTML = dateStart + " to " + dateEnd
    cellSavings.innerHTML = "$ " + savings
    cellInvested.innerHTML = "$ " + invested
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
            if(Number(income) < (Number(savings) + Number(invested))){
                alert("Your cannot SAVE and INVEST more than your income!")
            }else{
                document.getElementById("tr_Default").style.display = "none"
                document.getElementById("tr_Default_savings").style.display = "none"
                insertTableData(dateStart, dateEnd, income, expenses, savings, invested)
                document.getElementById("addDataDiv").style.display = "none"
                GetCellValues()
            }
        }
    }
}

function clearAddDataDiv(){
    document.getElementById("dateStart").value = ""
    document.getElementById("dateEnd").value = ""
    document.getElementById("txtIncome").value = ""
    document.getElementById("txtExpenses").value = ""
    document.getElementById("txtSavings").value = ""
    document.getElementById("txtInvested").value = ""
}