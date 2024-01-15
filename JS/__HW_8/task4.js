// 4. Створіть 2 інпути та одну кнопку. Зробіть так, щоб інпути обмінювалися вмістом.
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");

input1.setAttribute("id", "input1");
input2.setAttribute("id", "input2");

input1.setAttribute("type", "text");
input1.setAttribute("name", "text");
input1.setAttribute("value", "text from input1");
input2.setAttribute("value", "text from input2");

input2.setAttribute("type", "text");
button.setAttribute("type", "button");
button.textContent = "TRANSFER";

button.onclick = function () {
  const value = input1.value;
  input1.value = input2.value;
  input2.value = value;
};

document.body.append(input1, input2, button);
