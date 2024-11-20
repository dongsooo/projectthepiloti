const imgBoxTextBox = document.querySelector(".imgBoxTextBox");

$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollingSpeed: 700,

    onLeave: function (index, nextIndex, direction) {
      if (direction === "down") {
        console.log("아래로 스크롤 됨");
      } else if (direction === "up") {
        imgBoxTextBox.style.width = "100%";
        imgBoxTextBox.style.minHeight = "100vh";
        imgBoxTextBox.style.position = "absolute";
        imgBoxTextBox.style.bottom = "0";
        imgBoxTextBox.style.left = "0";
        console.log("위로 스크롤 됨");
      }
    },
  });
});
