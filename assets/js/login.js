// hàm lắng nghe hiệu ứng click vào nút đăng ký

window.addEventListener("storage", function registerHref(event) {
    if (event.key === "REGISTER" && event.newValue === "true") {
        container.classList.add("right-panel-active");
    }
})

// hàm chuyển động animation.

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// hàm kiểm tra phần tử bên form đăng ký.
const registerBtn = document.querySelector(".form_register-right-btn");
let account = document.querySelector(".form_register-right-account");
let password = document.querySelector(".form_register-right-password");
let passwordAgain = document.getElementById("form_register-right-password-again");

registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (account.value == "") {
        document.querySelector(".account-element").innerText = "Vui Lòng nhập tài khoản";
    }
    else if (password.value == "") {
        document.querySelector(".password-element").innerText = "Vui Lòng nhập mật khẩu";
    }
    else if (passwordAgain.value == "") {
        document.querySelector(".password-again-element").innerText = "Vui Lòng nhập lại mật khẩu";
    }
    else {
        checkPass();
        if (checkPass() === true) {
            checkPassAgin();
        } else {
            document.querySelector(".password-element").innerText = "vui lòng nhập ít nhất 1 kí tự đặt biết và 1 kí tự in hoa"
        }
    }
});

// hàm kiểm tra pass có kí tự đặt biệt và có kí tự in hoa hay chưa

function checkPass() {
    let hasUppercase = /[A-Z]/.test(password.value);
    let hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value);
    return hasUppercase && hasSpecialCharacter
}

// hàm kiểm tra pass đúng với pass đã nhập hay chưa
let accountUserEntered = {};
function checkPassAgin() {
    if (password.value == passwordAgain.value) {
        accountUserEntered = {
            taikhoan: account.value,
            matkhau: password.value
        }
        checkAcount();
    } else {
        document.querySelector(".password-again-element").innerText = "Vui lòng nhập đúng với mật khẩu ở trên"
    }

}
// hàm kiểm tra thông tin tài khoản mật khẩu đã tồn tại hay chưa
const accountUsers = JSON.parse(localStorage.getItem("ACCOUNT_USER")) || [];

// ham kiem tra vi tri cua phan tu trong mang
let accountUserLocal = 0;

function checkAcount() {
    // let accountUserLocal = accountUsers.findIndex(item => item.taikhoan === accountUserEntered);
    if (accountUsers.length == 0) {
        accountUserLocal = -1;
    } else {
        for (i = 0; i < accountUsers.length; i++) {
            if (accountUsers[i].taikhoan == accountUserEntered.taikhoan) {
                accountUserLocal = accountUsers[i].taikhoan.indexOf(accountUserEntered.taikhoan);
                break;
            } else {
                accountUserLocal = -1;
            }
        }
    }
    if (accountUserLocal !== -1) {
        document.querySelector(".Notification").innerText = "Tài khoản đã tồn tại!";
    }
    else {
        accountUsers.push(accountUserEntered);
        document.querySelector(".Notification").innerText = "Chúc mừng bạn đã đăng ký thành công";
        localStorage.setItem("ACCOUNT_USER", JSON.stringify(accountUsers));
    }
}



// hàm kiểm tra dữ liệu khi login

function checkLogin() {
    let loginAccount = document.querySelector(".form_login-left-account");
    let loginPassword = document.querySelector(".form_login-left-password");
    const loginBtn = document.querySelector(".form_login-left-btn");
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        accountUsers.forEach((value) => {
            if (value.taikhoan == loginAccount.value && value.matkhau == loginPassword.value) {
                window.location.href = "index.html";
            } else {
                document.querySelector(".form_login-left-tb").innerText = "Thông tin Tài Khoản hoặc Mật khẩu không chính xác"
            }
        });
    })
}
checkLogin();
