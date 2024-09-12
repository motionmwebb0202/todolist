const input = document.getElementById("input");
const button = document.getElementsByClassName("submit")[0];
const list = document.querySelector(".list");

let inputValue = "";

input.addEventListener("keyup", (e) => {
  inputValue = e.target.value;

  if (!inputValue.trim()) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

button.addEventListener("click", onClick);

function onClick() {
  const newList = document.createElement("li");

  newList.innerHTML = `
    <h1 class="deletes">${inputValue}</h1>
  `;

  newList.addEventListener("click", () => {
    list.removeChild(newList);
  });
  newList.className = "list-item";

  list.append(newList);

  input.value = "";
  inputValue = "";
  button.disabled = true;
}

// addEventListener добавить слушателья событи
