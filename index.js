const skullBox = document.getElementsByClassName("skullBox");

for (var i = 0; i < skullBox.length; i++) {
  skullBox[i].addEventListener("mouseenter", () => {
    console.log(event.target.innerHTML);
  });
}
