// 1. Згенерувати теги теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки.
//  прописати стилі для для елементів використовуючи css id та класи
// https://ru.megaindex.com/blog/files/images/semantic-markup-example.jpg

// При подвійному кліку на тег має з'явитись input який прийматиме текст для тега по якому натиснули та новий фоновий колір

const create = function () {
  const body = document.querySelector("body");
  // основные блоки контейнеры
  const headerTop = document.createElement("header");
  // headerTop.textContent = "HEADER";
  const sectionLeft = document.createElement("section");
  const sectionRight = document.createElement("section");
  const footer = document.createElement("footer");

  // добавление в блок headerTop
  const navHeaderTop = document.createElement("nav");

  // добавление подблоков в блок sectionLeft
  const sectionLeftHeader = document.createElement("header");
  const article_1 = document.createElement("article");
  const article_2 = document.createElement("article");
  const sectionLeftFooter = document.createElement("footer");

  // добавление подблоков в блок sectionRight
  const sectionRightHeader = document.createElement("header");
  const sectionRightNav = document.createElement("nav");

  // добавление тегов в подблок article_1
  const article_1_Header = document.createElement("header");
  const article_1_Aside = document.createElement("aside");
  const aricle_1_Footer = document.createElement("footer");
  const article_1_ParagLong = document.createElement("p");
  const article_1_ParagShort = document.createElement("p");

  // добавление тегов в подблок article_2
  const article_2_Header = document.createElement("header");
  const article_2_parag1 = document.createElement("p");
  const article_2_parag2 = document.createElement("p");
  const article_2_Footer = document.createElement("footer");

  // присвоение имен тегов блоков,подблоков и конечных тегов в подблоках
  body.textContent = "BODY";
  headerTop.textContent = "HEADER";
  sectionLeft.textContent = "SECTION";
  sectionRight.textContent = "SECTION";
  footer.textContent = "FOOTER";
  navHeaderTop.textContent = "NAV";
  sectionLeftHeader.textContent = "HEADER";
  article_1.textContent = "ARTICLE";
  article_2.textContent = "ARTICLE";
  sectionLeftFooter.textContent = "FOOTER";
  sectionRightHeader.textContent = "HEADER";
  sectionRightNav.textContent = "NAV";
  article_1_Header.textContent = "HEADER";
  article_1_Aside.textContent = "ASIDE";
  aricle_1_Footer.textContent = "FOOTER";
  article_1_ParagLong.textContent = "P";
  article_1_ParagShort.textContent = "P";
  article_2_Header.textContent = "HEADER";
  article_2_parag1.textContent = "P";
  article_2_parag2.textContent = "P";
  article_2_Footer.textContent = "FOOTER";

  // добавление созданых элементов друг в друга
  body.append(headerTop, sectionLeft, sectionRight, footer);
  headerTop.append(navHeaderTop);
  sectionLeft.append(
    sectionLeftHeader,
    article_1,
    article_2,
    sectionLeftFooter
  );
  sectionRight.append(sectionRightHeader, sectionRightNav);
  article_1.append(
    article_1_Header,
    article_1_ParagLong,
    article_1_ParagShort,
    article_1_Aside,
    aricle_1_Footer
  );
  article_2.append(
    article_2_Header,
    article_2_parag1,
    article_2_parag2,
    article_2_Footer
  );
};
create();

// headerTop.setAttribute("class", "header-top");
// headerSectionRight.setAttribute("class", "header-section__right");
// headerArticle1.setAttribute("class", "header-section__left--article1");
// headerArticle1.setAttribute("class", "header-section__left--article2");

// nav.setAttribute("class", "header-nav");
// navSectionRight.setAttribute("class", "section-nav__right");

// sectionLeft.setAttribute("class", "section-left");
// sectionRight.setAttribute("class", "section-right");

// footer.setAttribute("class", "footer");
