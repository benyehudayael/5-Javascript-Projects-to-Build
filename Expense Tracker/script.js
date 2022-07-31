


function expenseTable() {
    let fullName = document.getElementById('name').value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    var table = document.getElementById("expenses");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    cell1.innerText = fullName;
    let cell2 = document.createElement("td");
    cell2.innerText = date;
    let cell3 = document.createElement("td");
    cell3.innerText = amount;
    let cell4 = document.createElement("td");
    let adelete = document.createElement("button");
    adelete.innerText = "x";
    adelete.addEventListener("click", (x) => {x.target.parentElement.parentElement.remove()})
    cell4.appendChild(adelete);


    
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);

    
  }