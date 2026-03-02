let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";
let total = 0;

cart.forEach(item => {
html += `
<div class="item">
<span>${item.name}</span>
<span>₹${item.price}</span>
</div>`;
total += item.price;
});

cartItems.innerHTML = html;
totalBill.innerText = "Total Bill: ₹" + total;

function checkout(){
window.location = "order.html";
}