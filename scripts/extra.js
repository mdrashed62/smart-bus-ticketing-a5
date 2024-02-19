function setSeat(id, value) {
  document.getElementById(id).innerText = value;
}

function setBgColorByClassName(element) {
  element.classList.add("bg-green-500", "text-white");
}

let seatCount = 0;
let seatLess = 8;
const bookedSeats = [];
let total = 0;

function ticketInfo(id, type, price) {
  const element = document.getElementById(id);
  const isExist = bookedSeats.find((seat) => seat.id === id);
  if (seatCount < 4 && !isExist) {
    element.classList.add("bg-green-500", "text-white");
    bookedSeats.push({ id, type, price });
    seatCount = seatCount + 1;
    seatLess = seatLess - 1;
    total = total + price;

    setSeat("increase-seat", seatCount);
    setSeat("seat-less", seatLess);
    const node = document.getElementById("append-element");
    const seatRow = document.createElement("div");
    seatRow.classList = "flex justify-between items-center";

    const idLi = document.createElement("li");
    const typeLi = document.createElement("li");
    const priceLi = document.createElement("li");

    idLi.textContent = id;
    typeLi.textContent = type;
    priceLi.textContent = price;

    seatRow.appendChild(idLi);
    seatRow.appendChild(typeLi);
    seatRow.appendChild(priceLi);
    node.appendChild(seatRow);

    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = total;
  }
}

let grandTotal = 0;
function applyCoupon() {
  let couponCode = document.getElementById("couponInput").value;
  console.log("coupon code", couponCode);
  let discount = 0;
  if (couponCode === "NEW15") {
    discount = total * 0.15;
  } else if (couponCode === "Couple 20") {
    discount = total * 0.2;
  }
  let grandTotalElement = document.getElementById("grand-price");
  let grandTotal = total - discount;
  grandTotalElement.textContent = grandTotal.toFixed(2);
}

function forModal() {
  document.getElementById("for-modal");
}


// hide input-field
document.getElementById("hide-btn").addEventListener("click", function () {

  const secret = document.getElementById("hide-info");

  secret.style.display = "none";

 });

// reset page
function reloadPage() {
  window.location.reload();
}
