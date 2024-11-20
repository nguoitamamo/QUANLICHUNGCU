function showLargeImage(clickedImage, event) {
    var largeImage = document.getElementById("largeImage");
    var titleOverlay = document.getElementById("titleOverlay");
    var imageOverlay = document.getElementById("imageOverlay");

    var imgSrc = clickedImage.querySelector("img").src;
    var titleDesc = clickedImage.querySelector(".title").innerText;

    largeImage.src = imgSrc;
    titleOverlay.innerText = titleDesc;

    imageOverlay.style.display = "flex";
    titleOverlay.style.display = "block";

    // Hiệu ứng hiển thị ảnh lớn
    setTimeout(function () {
        imageOverlay.style.opacity = "1";
        imageOverlay.style.pointerEvents = "auto";
        largeImage.style.transform = "scale(1)";
    }, 10); // Đợi một chút để kích hoạt hiệu ứng
}

function hideLargeImage() {
    var imageOverlay = document.getElementById("imageOverlay");
    var titleOverlay = document.getElementById("titleOverlay");

    imageOverlay.style.opacity = "0";
    imageOverlay.style.pointerEvents = "none";
    largeImage.style.transform = "scale(0.8)"; // Thu nhỏ lại ảnh trước khi ẩn

    setTimeout(function () {
        imageOverlay.style.display = "none";
        titleOverlay.style.display = "none";
    }, 300); // Đợi hiệu ứng kết thúc trước khi ẩn lớp phủ
}
