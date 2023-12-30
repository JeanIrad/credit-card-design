// alert("helloo Charles");
const cardInputs = document.querySelector("#card-id");

cardInputs.addEventListener("input", function () {
  let inputValue = this.value.replace(/\D/g, "");
  inputValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 - ");
  this.value = inputValue;

  // return;
});
