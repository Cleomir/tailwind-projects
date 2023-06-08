const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMessage = document.getElementById("error-message");

// form validation
const isValidURL = (url) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(url);
};

linkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value === "") {
    errorMessage.innerHTML = "Please enter something";
    input.classList.add("border-red");
  } else if (!isValidURL(input.value)) {
    errorMessage.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errorMessage.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success");
    input.value = "";
  }
});

// hamburger toggle
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
