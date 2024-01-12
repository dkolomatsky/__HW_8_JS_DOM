// 5. Створіть 5 див на сторінці, використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.
const randomRGB = () => {
  return Math.floor(Math.random() * 256);
};
for (let i = 1; i <= 5; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", "div" + i);
  document.body.append(div);
}
const [...divList] = document.getElementsByTagName("div");
divList.forEach((el) => {
  el.setAttribute(
    "style",
    `background-color: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}); width: 100%; height: 30px; border: 1px solid; margin-bottom: 5px`
  );
});
