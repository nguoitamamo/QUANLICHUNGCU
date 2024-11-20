var currentBox = null;
var datCocElement = null;
// import { check_hoadon } from "./comon.js";
// console.log(check_hoadon);

function showConfirmation(button) {
    var confirmationDialog = document.getElementById("confirmationDialog");
    confirmationDialog.classList.add('show');
    if (confirmationDialog) {
        confirmationDialog.style.display = "block";
        currentBox = button.closest(".box-dv");
        datCocElement = currentBox.querySelector(".dat-coc-button");
        currentBox.onclick = null;
    }
}

function confirmDatCoc(a) {
    if (currentBox) {
        currentBox.style.opacity = "0.7";
        if (datCocElement) {
            datCocElement.innerHTML = "Đang thanh toán";
            datCocElement.style.color = "red";
        }
    }
    var canho = currentBox.querySelector('.img-dv').getAttribute('src');
    var gia = currentBox.querySelector('.gia').textContent;
    var mota = currentBox.querySelector('.desc').textContent;
    var information = {
        img: canho,
        gia: gia,
        mota: mota
    };


    // Lưu thông tin chung cư vào sessionStorage
    sessionStorage.setItem('selectedApartment', JSON.stringify(information));




    // Chuyển đến trang thanh toán
    window.open('indexdatoc1.html', '_blank');



    closeConfirmation();
}

function closeConfirmation() {
    var confirmationDialog = document.getElementById("confirmationDialog");
    confirmationDialog.classList.remove('show');
    if (confirmationDialog) {
        confirmationDialog.style.display = "none";
    }
}

// function showLargeImage(box, event) {
//     event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên

//     var pre = document.querySelector('.image-overlay');
//     pre.style.display = "none";
// }
