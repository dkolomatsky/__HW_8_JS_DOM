// 1. Згенерувати теги теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки.
//  прописати стилі для для елементів використовуючи css id та класи
// https://ru.megaindex.com/blog/files/images/semantic-markup-example.jpg

// При подвійному кліку на тег має з'явитись input який прийматиме текст для тега по якому натиснули та новий фоновий колір
const container = document.createElement("div");

const headerTop = document.createElement("header");
const headerSectionLeft = document.createElement("header");
const headerSectionRight = document.createElement("header");
const headerArticle1 = document.createElement("header");
const headerArticle2 = document.createElement("header");

const nav = document.createElement("nav");
const navSectionRight = document.createElement("nav");

const sectionLeft = document.createElement("section");
const sectionRight = document.createElement("section");

const article1 = document.createElement("article");
const article2 = document.createElement("article");

const asideArticle1 = document.createElement("aside");

const pLongArticle1 = document.createElement("p");
const pLongArticle2 = document.createElement("p");
const p2longArticle2 = document.createElement("p");
const pShortArticle1 = document.createElement("p");

const footer = document.createElement("footer");
const footerSectionLeft = document.createElement("footer");
const footerAricle1 = document.createElement("footer");
const footerArticle2 = document.createElement("footer");

document.body.innerText = "BODY";
headerTop.innerText = "HEADER";
nav.innerText = "NAV";
headerSectionRight.innerText = "HEADER";
navSectionRight.innerText = "NAV";
sectionLeft.innerText = "SECTION";
sectionRight.innerText = "SECTION";
footer.innerText = "FOOTER";

container.setAttribute("class", "container");
headerTop.setAttribute("class", "header-top");
headerSectionRight.setAttribute("class", "header-section__right");
headerArticle1.setAttribute("class", "header-section__left--article1");
headerArticle1.setAttribute("class", "header-section__left--article2");

nav.setAttribute("class", "header-nav");
navSectionRight.setAttribute("class", "section-nav__right");

sectionLeft.setAttribute("class", "section-left");
sectionRight.setAttribute("class", "section-right");

footer.setAttribute("class", "footer");

document.body.append(container);
container.append(headerTop, sectionLeft, sectionRight, footer);

headerTop.append(nav);

sectionRight.append(headerSectionRight, navSectionRight);
