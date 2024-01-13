// 1. Згенерувати теги теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки.
//  прописати стилі для для елементів використовуючи css id та класи
// https://ru.megaindex.com/blog/files/images/semantic-markup-example.jpg

// При подвійному кліку на тег має з'явитись input який прийматиме текст для тега по якому натиснули та новий фоновий колір

// const container = document.createElement("div");

const headerTop = document.createElement("header");
const sectionLeft = document.createElement("section");
const sectionRight = document.createElement("section");
const footer = document.createElement("footer");
document.body.append(headerTop, sectionLeft, sectionRight, footer);

const nav = document.createElement("nav");
headerTop.append(nav);

const sectionLeftHeader = document.createElement("header");
const article_1 = document.createElement("article");
const article_2 = document.createElement("article");
const sectionLeftFooter = document.createElement("footer");
sectionLeft.append(sectionLeftHeader, article_1, article_2, sectionLeftFooter);

const sectionRightHeader = document.createElement("header");
const sectionRightNav = document.createElement("nav");
sectionRight.append(sectionRightHeader, sectionRightNav);

const article_1_Header = document.createElement("header");
const article_1_Aside = document.createElement("aside");
const aricle_1_Footer = document.createElement("footer");
const article_1_ParagLong = document.createElement("p");
const article_1_ParagShort = document.createElement("p");
article_1.append(
  article_1_Header,
  article_1_ParagLong,
  article_1_ParagShort,
  article_1_Aside,
  aricle_1_Footer
);

const article_2_Header = document.createElement("header");
const article_2_parag1 = document.createElement("p");
const article_2_parag2 = document.createElement("p");
const article_2_Footer = document.createElement("footer");
article_2.append(
  article_2_Header,
  article_2_parag1,
  article_2_parag2,
  article_2_Footer
);

// document.body.innerText = "BODY";
// headerTop.innerText = "HEADER";
// nav.innerText = "NAV";
// headerSectionRight.innerText = "HEADER";
// navSectionRight.innerText = "NAV";
// sectionLeft.innerText = "SECTION";
// sectionRight.innerText = "SECTION";
// footer.innerText = "FOOTER";

// container.setAttribute("class", "container");
// headerTop.setAttribute("class", "header-top");
// headerSectionRight.setAttribute("class", "header-section__right");
// headerArticle1.setAttribute("class", "header-section__left--article1");
// headerArticle1.setAttribute("class", "header-section__left--article2");

// nav.setAttribute("class", "header-nav");
// navSectionRight.setAttribute("class", "section-nav__right");

// sectionLeft.setAttribute("class", "section-left");
// sectionRight.setAttribute("class", "section-right");

// footer.setAttribute("class", "footer");

// document.body.append(container);
// container.append(headerTop, sectionLeft, sectionRight, footer);

// headerTop.append(nav);

// sectionRight.append(headerSectionRight, navSectionRight);
