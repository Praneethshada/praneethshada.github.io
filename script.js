function getTime() {
  return new Date().toLocaleString();
}

function getElementType(element) {
  let type = element.tagName.toLowerCase();

  if (element.type) {
    type = type + "_" + element.type;
  }

  if (element.id) {
    type = type + "#" + element.id;
  }

  return type;
}

document.addEventListener("click", function (e) {
  let timestamp = getTime();
  let eventType = "click";
  let elementType = getElementType(e.target);

  console.log(timestamp + ", " + eventType + ", " + elementType);
});

let viewedElements = [];

function checkViews() {
  let elements = document.querySelectorAll(
    "img, button, input, div, h1, h2, h3, p, a, video"
  );

  elements.forEach(function (element) {
    let rect = element.getBoundingClientRect();
    let isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

    if (isVisible && !viewedElements.includes(element)) {
      viewedElements.push(element);

      let timestamp = getTime();
      let eventType = "view";
      let elementType = getElementType(element);

      console.log(timestamp + ", " + eventType + ", " + elementType);
    }
  });
}

window.addEventListener("load", function () {
  console.log("Event Tracking Started");
  checkViews();
});

window.addEventListener("scroll", function () {
  checkViews();
});
