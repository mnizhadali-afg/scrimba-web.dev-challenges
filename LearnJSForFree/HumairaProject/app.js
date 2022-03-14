const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const mark = document.getElementById("mark");

const btn = document.getElementById("submit");
const inputs = [firstName, lastName, mark];

function getInputs() {
  btn.addEventListener("click", () => {
    inputs.push(firstName.value);
    inputs.push(lastName.value);
    inputs.push(mark.value);

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value) {
        console.log(inputs[i].value);
      }
    }
  });
}

getInputs();
