$(document).ready(function () {
  // 商品資訊 Arr
  const sushiArr0 = [
    { content: "鮪魚壽司", pic: "./img/sushi01.png", price: "40" },
    { content: "醃製鮪魚壽司", pic: "./img/sushi02.png", price: "40" },
    { content: "鮭魚壽司", pic: "./img/sushi03.png", price: "40" },
    { content: "炙燒鮭魚肚壽司", pic: "./img/sushi04.png", price: "50" },
    { content: "極上鮪魚大腹", pic: "./img/sushi05.png", price: "40" },
    { content: "赤鯥", pic: "./img/sushi06.png", price: "40" },
    { content: "鹽醋漬鯖魚", pic: "./img/sushi07.png", price: "40" },
    { content: "炙燒鰻魚肚壽司", pic: "./img/sushi08.png", price: "50" },
    { content: "鮭魚卵軍艦", pic: "./img/ring1.png", price: "60" },
    { content: "鮪魚沙拉軍艦", pic: "./img/ring2.png", price: "40" },
    { content: "玉米沙拉軍艦", pic: "./img/ring3.png", price: "40" },
    { content: "鱈魚子沙拉軍艦", pic: "./img/ring4.png", price: "40" },
    { content: "甜蝦軍艦", pic: "./img/ring5.png", price: "40" },
    { content: "豆皮壽司", pic: "./img/ring6.png", price: "40" },
    { content: "小黃瓜卷", pic: "./img/ring7.png", price: "40" },
    { content: "鮪魚泥細卷", pic: "./img/ring8.png", price: "40" },
    { content: "可口可樂", pic: "./img/drink01.png", price: "40" },
    { content: "雪碧", pic: "./img/drink02.png", price: "40" },
    { content: "梅酒", pic: "./img/drink03.png", price: "90" },
    { content: "可爾必思", pic: "./img/drink04.png", price: "40" },
    { content: "牛奶霜淇淋", pic: "./img/drink05.png", price: "40" },
    { content: "抹茶霜淇淋", pic: "./img/drink06.png", price: "60" },
    { content: "綜合霜淇淋", pic: "./img/drink07.png", price: "60" },
    { content: "千層蛋糕", pic: "./img/drink08.png", price: "60" },
    { content: "辣味噌拉麵", pic: "./img/soup01.png", price: "120" },
    { content: "牛肉烏龍麵", pic: "./img/soup02.png", price: "100" },
    { content: "豆皮烏龍麵", pic: "./img/soup03.png", price: "100" },
    { content: "炸蝦烏龍麵", pic: "./img/soup04.png", price: "100" },
    { content: "叉燒豚骨拉麵", pic: "./img/soup05.png", price: "100" },
    { content: "蛤蜊味噌湯", pic: "./img/soup06.png", price: "120" },
    { content: "海苔味噌湯", pic: "./img/soup07.png", price: "60" },
  ];

  const sushiArr = [
    { content: "鮪魚壽司", pic: "./img/sushi01.png", price: "40" },
    { content: "醃製鮪魚壽司", pic: "./img/sushi02.png", price: "40" },
    { content: "鮭魚壽司", pic: "./img/sushi03.png", price: "40" },
    { content: "炙燒鮭魚肚壽司", pic: "./img/sushi04.png", price: "50" },
    { content: "極上鮪魚大腹", pic: "./img/sushi05.png", price: "40" },
    { content: "赤鯥", pic: "./img/sushi06.png", price: "40" },
    { content: "鹽醋漬鯖魚", pic: "./img/sushi07.png", price: "40" },
    { content: "炙燒鰻魚肚壽司", pic: "./img/sushi08.png", price: "50" },
  ];
  const ringArr = [
    { content: "鮭魚卵軍艦", pic: "./img/ring1.png", price: "60" },
    { content: "鮪魚沙拉軍艦", pic: "./img/ring2.png", price: "40" },
    { content: "玉米沙拉軍艦", pic: "./img/ring3.png", price: "40" },
    { content: "鱈魚子沙拉軍艦", pic: "./img/ring4.png", price: "40" },
    { content: "甜蝦軍艦", pic: "./img/ring5.png", price: "40" },
    { content: "豆皮壽司", pic: "./img/ring6.png", price: "40" },
    { content: "小黃瓜卷", pic: "./img/ring7.png", price: "40" },
    { content: "鮪魚泥細卷", pic: "./img/ring8.png", price: "40" },
  ];
  const desertArr = [
    { content: "可口可樂", pic: "./img/drink01.png", price: "40" },
    { content: "雪碧", pic: "./img/drink02.png", price: "40" },
    { content: "梅酒", pic: "./img/drink03.png", price: "90" },
    { content: "可爾必思", pic: "./img/drink04.png", price: "40" },
    { content: "牛奶霜淇淋", pic: "./img/drink05.png", price: "40" },
    { content: "抹茶霜淇淋", pic: "./img/drink06.png", price: "60" },
    { content: "綜合霜淇淋", pic: "./img/drink07.png", price: "60" },
    { content: "千層蛋糕", pic: "./img/drink08.png", price: "60" },
  ];
  const soupArr = [
    { content: "辣味噌拉麵", pic: "./img/soup01.png", price: "120" },
    { content: "牛肉烏龍麵", pic: "./img/soup02.png", price: "100" },
    { content: "豆皮烏龍麵", pic: "./img/soup03.png", price: "100" },
    { content: "炸蝦烏龍麵", pic: "./img/soup04.png", price: "100" },
    { content: "叉燒豚骨拉麵", pic: "./img/soup05.png", price: "100" },
    { content: "蛤蜊味噌湯", pic: "./img/soup06.png", price: "120" },
    { content: "海苔味噌湯", pic: "./img/soup07.png", price: "60" },
  ];
  let page = 1;
  let cart = [];
  let totalPrice = 90;
  const arrPrice = [40, 50];
  let CartArr = ["鮪魚壽司", "炙燒鰻魚肚壽司"];

  console.log(CartArr);
  $(document).on("click", ".buyBtn", function () {
    showCart();
    let ans = $(this).siblings().eq(1).text();
    console.log(CartArr.indexOf(ans));
    if (CartArr.indexOf(ans) == -1) {
      CartArr.push(ans);
      console.log(CartArr);
      console.log(ans);
      if (page == 1) {
        pageArr = sushiArr;
      } else if (page == 2) {
        pageArr = ringArr;
      } else if (page == 3) {
        pageArr = desertArr;
      } else if (page == 4) {
        pageArr = soupArr;
      }
      pageArr.forEach((object) => {
        if (object.content == ans) {
          console.log(object.price);
          $("#addCart").append(`
            <div class="row ">
            <div class="col-3">
                <img src="${object.pic}" alt="" style="text-align: center;">
            </div>
            <div class="col-2 butItem">${object.content}</div>
            <div class="col-2 butItem">${object.price}元</div>
            <div class="col-2 butItem">
                <input class="num01" type="number" value="1" min="1" width="30px">
            </div>
            <div class="col-2 butItem" class="Price01">${object.price}元</div>
            <div class="col-1 delBtn">
                X
            </div>
            <hr>
        </div>`);
          totalPay();
        }
      });
    }
  });

  function totalPay() {
    cart = [];
    console.log(CartArr);
    let NewPrice = 0;
    let cartNum = 0;
    let itemCount = null;
    let cartItemNum = $("#addCart").children().length;
    for (i = 0; i < cartItemNum; i++) {
      let price1 = $("#addCart").children()[i].children[4].innerText;
      let price0 = $("#addCart").children()[i].children[2].innerText;
      price1 = Number(price1.slice(0, -1));
      price0 = Number(price0.slice(0, -1));
      itemCount = price1 / price0;
      console.log(itemCount);
      cartNum = cartNum + itemCount;
      NewPrice = NewPrice + price1;
      let newItem = {
        name: CartArr[i],
        price1: price1,
        price0: price0,
        itemCount: itemCount,
      };
      cart.push(newItem);
    }
    $("#totalPrice").text("總價:" + NewPrice + "元");
    $(".countCart").text(cartNum);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  totalPay();
  $(document).on("change", "input[type='number']", function () {
    let butNum = $(this).val();
    let textLength = $(this).parent().siblings().eq(2).text().length;
    if (textLength == 3) {
      ans1 = Number($(this).parent().siblings().eq(2).text().slice(0, 2));
    } else {
      ans1 = Number($(this).parent().siblings().eq(2).text().slice(0, 3));
    }
    let Anser = ans1 * butNum;
    let totalAns1 = $(this)
      .parent()
      .siblings()
      .eq(3)
      .text(Answer + "元");
    totalPay();
  });
  $("#closeCart").on("click", function () {
    $("#shopCartBox").fadeOut("slow");
  });

  $(document).on("click", ".delBtn", function () {
    $(this).parents(".row").remove();
    let removeName = $(this).siblings().eq(1).text();
    CartArr = CartArr.filter(function (item) {
      return item != removeName;
    });
    console.log(CartArr);
    totalPay();
  });
  $(document).keyup(function (event) {
    switch (event.keyCode) {
      case 27:
        $("#shopCartBox").fadeOut("slow");
    }
  });
  $("#sushi").on("click", function () {
    changePage(sushiArr);
    page = 1;
    console.log(page);
  });
  $("#ring").on("click", function () {
    changePage(ringArr);
    page = 2;
    console.log(page);
  });
  $("#dessert").on("click", function () {
    changePage(desertArr);
    page = 3;
    console.log(page);
  });
  $("#soup").on("click", function () {
    changePage(soupArr);
    page = 4;
    console.log(page);
  });

  $(".itemType").on("click", function () {
    $(".itemType").css("background-color", "black");
    $(this).css("background-color", "#a70719");
    console.log(13213);
  });

  function changePage(type) {
    $("#changeInfo").html("");
    const infos = type;
    infos.forEach((info) => {
      $("#changeInfo").append(
        `  <div class="sushiInfo col-lg-3 col-md-6 ">
      <div class="innerBox">
          <div class="imgBox" style=" background-image: url(${info.pic});"></div>
          <h5>${info.content}</h5>
          <h3>${info.price}元</h3>
          <div class="buyBtn">購買</div>
      </div>
  </div>`
      );
    });
  }
});
