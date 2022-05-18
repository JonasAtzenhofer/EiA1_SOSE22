var colors = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)", "green"];
var activeIndex = 0;
document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = colors[activeIndex];
    activeIndex = activeIndex + 1;
});
//# sourceMappingURL=test.js.map