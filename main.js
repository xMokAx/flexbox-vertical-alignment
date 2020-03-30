(function() {
  const selectDirection = document.getElementById("flex-direction");
  const selectAlignItems = document.getElementById("align-items");
  const selectAlignContent = document.getElementById("align-content");
  const selectJustifyContent = document.getElementById("justify-content");
  const flexContainer = document.querySelector(".flex-container");
  const selectAlignSelf = document.getElementById("align-self");
  const thirdItem = document.querySelectorAll(".flex-item")[2];
  const resetButton = document.querySelector("#reset");
  const horLabels = Array.from(document.querySelector(".axis-hor").children);
  const verLabels = Array.from(document.querySelector(".axis-ver").children);

  function setStyleProp(prop, value) {
    flexContainer.style[prop] = value;
  }

  function getSuffix(index) {
    switch (index) {
      case 0:
        return "start";
      case 1:
        return "axis";
      case 2:
        return "end";
    }
  }

  selectDirection.addEventListener("change", e => {
    const direction = e.target.value;
    const isRow = direction.includes("row");
    const isReversed = direction.includes("reverse");
    setStyleProp("flexDirection", direction);
    horLabels.forEach((label, i) => {
      const index = isReversed && isRow ? horLabels.length - 1 - i : i;
      const prefix = isRow ? "Main" : "Cross";
      const suffix = getSuffix(index);
      label.textContent = prefix + " " + suffix;
    });

    verLabels.forEach((label, i) => {
      const index = isReversed && !isRow ? verLabels.length - 1 - i : i;
      const prefix = isRow ? "Cross" : "Main";
      const suffix = getSuffix(index);
      label.textContent = prefix + " " + suffix;
    });
  });

  selectAlignItems.addEventListener("change", e => {
    setStyleProp("alignItems", e.target.value);
  });

  selectAlignContent.addEventListener("change", e => {
    setStyleProp("alignContent", e.target.value);
  });

  selectJustifyContent.addEventListener("change", e => {
    setStyleProp("justifyContent", e.target.value);
  });

  selectAlignSelf.addEventListener("change", e => {
    thirdItem.style.alignSelf = e.target.value;
  });

  resetButton.addEventListener("click", () => {
    selectDirection.value = "row";
    selectAlignItems.value = "";
    selectAlignContent.value = "";
    selectJustifyContent.value = "";
    selectAlignSelf.value = "";
    thirdItem.style = "";
    flexContainer.style = "";
  });
})();
