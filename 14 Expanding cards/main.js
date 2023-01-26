const panels = document.querySelectorAll(".panel");
const lockBtns = document.querySelectorAll(".lock");

for (const panel of panels) {
  panel.addEventListener("click", () => {
    if (!panelLocked()) {
      removeActiveClasses();
      panel.classList.add("selected");
    }
  });
}

function removeActiveClasses() {
  panels.forEach( (panel) => {
    panel.classList.remove("selected");
  });
}

lockBtns.forEach((lockBtn) => {
  lockBtn.addEventListener("click", () => lockBtn.parentElement.classList.toggle("locked"));
});

function panelLocked() {
  for (const panel of panels) {
    if (panel.classList.contains("locked")) {
      return true;
    }
  }
  return false;
}