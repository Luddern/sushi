$(document).ready(function () {
  const modal = document.getElementById("id01");
  const modal2 = document.getElementById("id02");
  const ShopCart = document.getElementById("shopCartBox");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    if (event.target == ShopCart) {
      $("#shopCartBox").fadeOut("slow");
      console.log(999);
    }
  };
});

function login() {
  $("#id01").css("display", "block");
  console.log("123");
}

function qrInfo() {
  $("#id02").css("display", "block");
  console.log("qrcode");
}

function showCart() {
  $("#shopCartBox").css("display", "block");
  console.log("CART");
}
