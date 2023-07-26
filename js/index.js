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
function showWelcomeMessage(event) {
  event.preventDefault(); // 取消表單預設的提交行為

  const username = document.getElementsByName("username")[0].value; // 取得使用者名稱
  const welcomeMessage = `歡迎回來，${username}!`; // 歡迎訊息文字

  // 使用彈跳視窗顯示歡迎訊息
  alert(welcomeMessage);

  // 隱藏登入視窗（這裡假設你的登入視窗的id為'id01'）
  document.getElementById("id01").style.display = "none";
}
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
