// 1. Change background color from color picker
document.getElementById("bgColorPicker").addEventListener("input", function () {
    document.body.style.backgroundColor = this.value;
});

// 2. Change paragraph text color from color picker
document.getElementById("textColorPicker").addEventListener("input", function () {
    document.getElementById("myParagraph").style.color = this.value;
});

// 3. Change div text
function changeDivText() {
    document.getElementById("myDiv").textContent = "The content inside this div has been updated!";
}

// 4. Replace image
function replaceImage() {
    const img = document.getElementById("myImage");
    img.src = "/ColorPicker_ImageReplacer/supersaiyanGoku.png";                                                           
    img.alt = "SuperSaiyanGoku";
}