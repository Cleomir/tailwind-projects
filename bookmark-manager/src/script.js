const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) =>
  tab.addEventListener("click", (event) => {
    // deactivate all tabs
    tabs.forEach((tab) => {
      tab.children[0].classList.remove(
        "border-softRed",
        "border-b-4",
        "md:border-b-0"
      );
    });

    // deactivate all panels
    panels.forEach((panel) => panel.classList.add("hidden"));

    // activate tab and panel selected
    event.target.classList.add("border-softRed", "border-b-4");
    const classString = event.target.getAttribute("data-target");
    document
      .getElementById("panels")
      .getElementsByClassName(classString)[0]
      .classList.remove("hidden");
  })
);
