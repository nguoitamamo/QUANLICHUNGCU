var index = 0; // Đặt giá trị ban đầu cho index là 0
function changesImg() {
    var textArray = [
        "Chung cư với 17 tầng - Xung quanh thoáng mát",
        "Môi trường sống trong lành - Gần sân bay Tân Sơn Nhất",
        "Tiện ích ngoại khu đa dạng - Có sân bóng đá",
        "Gần các cửa hàng tiện lợi và siêu thị"
    ];
    var arraysImg = [
        "./assets/css/img/vi_tri_chung_cư.jpg",
        "./assets/css/img/san-bay-tan-son-nhat-1.jpg",
        "./assets/css/img/san-bay-tan-son-nhat-1.jpg",
        "./assets/css/img/cua-hang.jpg"
    ];
    var imgElement = document.getElementById('imgs');
    var changeText = document.getElementById('texts');

    imgElement.src = arraysImg[index];
    changeText.innerHTML = textArray[index];

    // Thay đổi dòng chữ và reset hiệu ứng typewriter
    changeText.style.animation = 'none';
    void changeText.offsetWidth; // Trigger reflow để reset hiệu ứng
    changeText.style.animation = null;

    index++;
    if (index == 4) {
        index = 0; // Đặt lại giá trị index thành 0 sau khi qua hết tất cả ảnh
    }
}