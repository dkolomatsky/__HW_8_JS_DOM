// 1. Згенерувати теги через javascript. Додати на сторінку семантичні теги та метагеги опису сторінки. Прописати стилі для для елементів використовуючи css id та класи
// код має зробити ось таку сторінку як на малюнкуhttps://ru.megaindex.com/blog/files/images/semantic-markup-example.jpg

// При подвійному кліку на тег має з'явитись input який прийматиме текст для тега по якому натиснули та новий фоновий колір
function createTag(
  tagName = "div",
  className = "",
  text = "",
  type = "text",
  listener = { typeEvent: null, Fn: null }
) {
  const tag = document.createElement(tagName);

  if (className !== "") {
    tag.classList.add(className);
  }
  if (tagName === "input") {
    tag.type = type;
  } else {
    tag.innerText = text;
  }
  if (listener.typeEvent !== null) {
    tag.addEventListener(listener.typeEvent, listener.Fn);
  }
  return tag;
}

function clearChanges() {
  allClasses.forEach((elem) => {
    elem.style.color = "";
    elem.style.backgroundColor = "";
    if (input) {
      input.className = "hide";
    }
    input.className = "input";
  });
}
function changeElement(e) {
  clearChanges();
  input.value = this.tagName;
  this.append(input);
  this.style.backgroundColor = "tomato";
  this.style.color = "white";
  e.stopPropagation();
}
const input = createTag("input");
const body = document.querySelector("body");
const container = createTag("div", "container");
const span = createTag("span", "container-span", "BODY");
// основные блоки
const headerTop = createTag("header", "header-top", "HEADER", undefined, {
  typeEvent: "dblclick",
  Fn: changeElement,
});
const sectionLeft = createTag("section", "section-left", "SECTION");
const sectionRight = createTag(
  "section",
  "section-right",
  "SECTION",
  undefined,
  { typeEvent: "dblclick", Fn: changeElement }
);
const footer = createTag("section", "footer-bottom", "FOOTER");
// добавление в блок headerTop
const navHeaderTop = createTag("nav", "header-top_nav", "NAV", undefined, {
  typeEvent: "dblclick",
  Fn: changeElement,
});
// добавление подблоков в блок sectionLeft
const sectionLeftHeader = createTag("header", "section-left__header", "HEADER");
const article_1 = createTag("article", "section-left__article1", "ARTICLE");
const article_2 = createTag("article", "section-left__article2", "ARTICLE");
const sectionLeftFooter = createTag("footer", "section-left__footer", "FOOTER");
// добавление подблоков в блок sectionRight
const sectionRightHeader = createTag(
  "header",
  "section-right__header",
  "HEADER",
  undefined,
  { typeEvent: "dblclick", Fn: changeElement }
);
const sectionRightNav = createTag(
  "nav",
  "section-right__nav",
  "NAV",
  undefined,
  { typeEvent: "dblclick", Fn: changeElement }
);
// добавление тегов в подблок article_1
const article_1_Header = createTag(
  "header",
  "section-left__article1--header",
  "HEADER"
);
const article_1_Aside = createTag(
  "aside",
  "section-left__article1--aside",
  "ASIDE"
);
const aricle_1_Footer = createTag(
  "footer",
  "section-left__article1--footer",
  "FOOTER"
);
const article_1_ParagLong = createTag(
  "p",
  "section-left__article1--paragLong",
  "P"
);
const article_1_ParagShort = createTag(
  "p",
  "section-left__article1--paragShort",
  "P"
);
// добавление тегов в подблок article_2
const article_2_Header = createTag(
  "header",
  "section-left__article2--header",
  "ARTICLE"
);
const article_2_parag1 = createTag("p", "section-left__article2--parag1", "P");
const article_2_parag2 = createTag("p", "section-left__article2--parag2", "P");
const article_2_Footer = createTag(
  "footer",
  "section-left__article2--footer",
  "FOOTER"
);
// добавление созданых элементов друг в друга
body.append(container);
container.append(span, headerTop, sectionLeft, sectionRight, footer);
headerTop.append(navHeaderTop);
sectionLeft.append(sectionLeftHeader, article_1, article_2, sectionLeftFooter);
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
const allClasses = [
  sectionRight,
  sectionRightHeader,
  sectionRightNav,
  input,
  span,
  headerTop,
  navHeaderTop,
];
