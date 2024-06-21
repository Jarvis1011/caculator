let cacu_opr = "";
let cacu_num = [];
let total = "0"; 

const keys = document.querySelectorAll("li");

function new_number(number) {
  // 判斷是否新增第二個數字
  if ((cacu_opr.length != 0) && (cacu_num.length === 1)) {
    cacu_num.push(""); 
    document.querySelector('.total').innerText = "";
  }
  let result = document.querySelector('.total').innerText;
  if (result.indexOf(".") != -1) { // 有小數點直接加上數字
    result += number;
    document.querySelector('.total').innerText = result;
  } else if ((result === "0") || (cacu_opr === "fa-equals")) { // 剛做完運算，加入數字要做改變
    result = number;
    total = number;
    cacu_opr = "";
    document.querySelector('.total').innerText = number;
  } else {
    result += number;
    total = result;
    document.querySelector('.total').innerText = result;
  }
}

function float_num(dot) {
  if (total.indexOf('.') === -1) { // 檢查total是否已經包含小數點
    total += dot;
    document.querySelector('.total').innerText = total;
  } else {
    alert('已加入小數點');
  }
}

function save_number() {
  let number = total;
  cacu_num.push(number);
}

//重製ac
function reset() {
  cacu_num = [];
  cacu_opr = "";
  total = "0";
  document.querySelector(".total").innerText = "0";
  console.log("重置為0");
}

function compute() {
  let number = document.querySelector('.total').innerText; // 把螢幕數字存下來
  cacu_num[1] = number;
  let result = 0;
  if (cacu_opr === "+") {
    result = Number(cacu_num[0]) + Number(cacu_num[1]);
    console.log(123);
  } else if (cacu_opr === "-") {
    result = Number(cacu_num[0]) - Number(cacu_num[1]);
  } else if (cacu_opr === "/") {
    result = Number(cacu_num[0]) / Number(cacu_num[1]);
  } else if (cacu_opr === "x") {
    result = Number(cacu_num[0]) * Number(cacu_num[1]);
    console.log(123);
  }
  total = result.toString();
  document.querySelector('.total').innerText = total;
  console.log(total);
  cacu_num = [];
  cacu_opr = "";
}

document.querySelector('.calculator').addEventListener("click", function(e) {
  if (e.target.getAttribute("data-type") === "num") {
    let number = e.target.innerText; // 取數字
    new_number(number);
  } else if (e.target.getAttribute("data-type") === "opr") {
    cacu_opr = e.target.innerText
    save_number();
    document.querySelector('.total').innerText = "0";
  } else if (e.target.getAttribute("data-type") === "sp") {
    if (e.target.innerText === 'AC') {
      reset();
    } else if (e.target.querySelector('i').classList.contains('fa-equals')) {
      compute();
    }
  } else if (e.target.getAttribute("data-type") === "sp-num") {
    let dot = e.target.innerText;
    float_num(dot);
  }
});
