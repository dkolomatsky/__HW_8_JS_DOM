// 2. Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//  При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло". Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинен бути створений і доданий на сторінку за допомогою Javascript
//  При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола. При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору. При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// Домоміжна література
// : https://uk.javascript.info/introduction-browser-events
// https://uk.javascript.info/document

const btn = document.querySelector(".btn");
const cir = document.createElement("input");
const btnDraw = document.createElement("button");

btn.onclick = () => {
  cir.type = "number";
  cir.value = 10;
  btnDraw.innerText = "Намалювати";
  btnDraw.type = "button";
  btn.after(cir, btnDraw);
};

btnDraw.onclick = function () {
  draw(cir.value);
};

function draw(r = 0) {
  const box = document.createElement("main");
  box.style.width = r * r * 10 + "px";
  box.className = "box";

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.className = "circle";
    div.innerText = i + 1;
    div.style.width = r * r + "px";
    div.style.height = r * r + "px";
    div.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    box.append(div);
    div.onclick = function () {
      div.remove();
    };
  }
  document.body.append(box);
}

const randomRGB = () => {
  return Math.floor(Math.random() * 256);
};
