
document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.getElementById('dangnhap');
    var confirmSuccessButton = document.getElementById('confirmSuccessButton')
    console.log(confirmSuccessButton)

    confirmButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Thực hiện các xử lý kiểm tra thông tin thẻ ở đây
        var emails = document.getElementById('emails').value;
        var pass = document.getElementById('pass').value;

        // Kiểm tra tính hợp lệ của thông tin thẻ là kiểm tra không được để trống
        if (emails === '' || pass === '') {
            confirmSuccessButton.textContent = "Đănh nhập không thành công"
            confirmSuccessButton.classList.add('show');
            removebutton();
            return;
        }
        confirmSuccessButton.textContent = "Đăng nhập thành công"
        confirmSuccessButton.classList.add('show');
        removebutton();
        setTimeout(function () {
            location.reload();
        }, 2100)
        sessionStorage.setItem('isLoggedIn', 'true');


    });

    // Kiểm tra trạng thái và thêm phần tử 
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        var newLi = document.createElement('li');
        var newA = document.createElement('a');
        newA.href = "./hoadon.html";
        newA.textContent = "Hóa đơn";

        var newLiClone = newLi.cloneNode(true); // Tạo bản sao của newLi

        var oldMenu = document.querySelector('.menu');
        var oldMenuMB = document.querySelector('.menu-mb');

        newLi.appendChild(newA);
        oldMenu.appendChild(newLi);
        oldMenuMB.appendChild(newLiClone); // Thêm bản sao vào oldMenuMB
    }

    // localStorage.clear();
});
function removebutton() {
    setTimeout(function () {
        confirmSuccessButton.classList.remove('show');
    }, 2000);
}


