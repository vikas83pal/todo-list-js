function fun() {
  let op = document.getElementById("output");
  let btn = document.getElementById("btn");
  let todo = document.getElementById("todoitem").value;
  let des = document.getElementById("tododes").value;

  if (todo === "" || des === "") {
    alert("please fill the details");
    document.getElementById("todoitem").value = "";
    document.getElementById("tododes").value = "";
  } else {

    let container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `<p>Todo Item : ${todo} <br> Description : ${des} <br> `;

    let button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", function () {
      container.remove();
    });

    // adding the button
    container.appendChild(button);

    //adding container with button to op div
    op.appendChild(container);

    document.getElementById("todoitem").value = "";
    document.getElementById("tododes").value = "";
  }
}
