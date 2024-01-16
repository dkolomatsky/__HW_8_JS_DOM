// 7. Створіть картинку та кнопку з назвою "Змінити картинку"
//              зробіть так щоб при завантаженні сторінки була картинка
//              https://itproger.com/img/courses/1476977240.jpg
//              При натисканні на кнопку вперше картинка замінилася на
//              https://itproger.com/img/courses/1476977488.jpg
//              при другому натисканні щоб картинка замінилася на
//              https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png

const img = document.querySelector("#html5");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
let currentImage = 1;

img2.src = "https://itproger.com/img/courses/1476977488.jpg";
img3.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";
img3.setAttribute("style", "height: 280px; width: 420px");

btn.onclick = () => {
  if (currentImage === 1) {
    container.replaceChild(img2, img);
    currentImage = 2;
  } else if (currentImage === 2) {
    container.replaceChild(img3, img2);
    currentImage = 3;
  } else if (currentImage === 3) {
    container.replaceChild(img, img3);
    currentImage = 1;
  }
};
