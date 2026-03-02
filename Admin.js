let orders = JSON.parse(localStorage.getItem("orders")) || [];

let table = document.getElementById("ordersTable");

orders.forEach((order, index) => {

    let row = table.insertRow();

    row.insertCell(0).innerText = order.name;
    row.insertCell(1).innerText = order.mobile;
    row.insertCell(2).innerText = order.items;
    row.insertCell(3).innerText = order.status;

    let actionCell = row.insertCell(4);

    
    let statusBtn = document.createElement("button");
    statusBtn.innerText = "Mark Delivered";

    statusBtn.onclick = function(){
        orders[index].status = "Delivered";
        localStorage.setItem("orders", JSON.stringify(orders));
        location.reload();
    };


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function(){
        orders.splice(index,1);
        localStorage.setItem("orders", JSON.stringify(orders));
        location.reload();
    };

    actionCell.appendChild(statusBtn);
    actionCell.appendChild(deleteBtn);
});