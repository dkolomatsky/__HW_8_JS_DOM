const list = document.querySelector("#list");
let itemNode = null;

const selectFirstChild = () => {
  clearColor();
  const firstChild = list.firstElementChild;
  firstChild.setAttribute("style", "color: red");
};
const selectLastChild = () => {
  clearColor();
  const lastChild = list.lastElementChild;
  lastChild.setAttribute("style", "color:red");
};
const selectNextNode = () => {
  clearColor();
  if (itemNode == null) {
    itemNode = list.firstElementChild;
    itemNode.setAttribute("style", "color: green; font-weight: bold");
    return;
  }
  itemNode = itemNode.nextElementSibling;
  if (itemNode !== null) {
    itemNode.setAttribute("style", "color: green; font-weight: bold");
    return;
  }
};

const selectPrevNode = () => {
  clearColor();
  if (itemNode == null) {
    itemNode = list.lastElementChild;
    itemNode.setAttribute("style", "color: orange; font-weight: bold");
    return;
  }
  itemNode = itemNode.previousElementSibling;
  if (itemNode !== null) {
    itemNode.setAttribute("style", "color: orange; font-weight: bold");
    return;
  }
};

const createNewChildStart = () => {
  const newItem = document.createElement("li");
  list.prepend(newItem);
  newItem.innerText = "New Item";
};
const createNewChildEnd = () => {
  const newItem = document.createElement("li");
  list.append(newItem);
  newItem.innerText = "New Item";
};

const removeFirstChild = () => {
  const list = document.querySelector("#list");
  const firstChild = list.firstElementChild;
  firstChild.remove();
};
const removeLastChild = () => {
  const lastChild = list.lastElementChild;
  lastChild.remove();
};

const clearColor = () => {
  const allItems = document.querySelectorAll("li");
  allItems.forEach((item) => {
    item.setAttribute("style", "color: none; font-weight: normal");
  });
};
