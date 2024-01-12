// 8.Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав

for (let i = 1; i < 11; i++) {
  const parag = document.createElement("p");
  document.body.append(parag);
  parag.setAttribute("class", "parag");
  parag.innerText = `Параграф № ${i}`;
  parag.onclick = function () {
    // parag.remove(); // видаляем параграф
    parag.setAttribute("style", "color: transparent"); // робимо його невидимим
  };
}
