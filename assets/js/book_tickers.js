

// lấy dữ liệu từ location Storage.

const filmTicket = JSON.parse(localStorage.getItem('FILM_USER_CLICK'));
// thay doi hinh anh theo location Storage của ảnh đang chọn ghế.


function filmBuyTickets() {
    const filmTicketElement = document.querySelector(".content_right-all");
    const filmBuyTicket = document.createElement('div');
    filmBuyTicket.classList.add('content_right');
    filmBuyTicket.innerHTML = `
        <div class="content_right-top">
            <img src="./assets/css/img/${filmTicket.img}" alt="" class="content_right-top-img">
            <div class="content_right-top-flim">
                <p class="content_right-top-flim-old">${filmTicket.old}</p>
                <p class="content_right-top-flim-name">${filmTicket.name}</p>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-film content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">Cinema Đà Lạt</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-location-dot content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">Quảng trường Lâm Viên, P.10,TP. Đà Lạt</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-calendar-days content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">14-01-2024</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-clock content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">11h30 - 13h</p>
                </div>
            <p class="content_right-top-flim-cinema-time">Phòng Chiếu: 05 <strong>.</strong> 2D Lồng tiếng</p>
            </div>
        </div>
        <div class="content_right-bottom">
            <hr>
            <div class="content_right-bottom-seat">
                <p class="content_right-bottom-text">Chổ Ngỗi: </p>
            </div>
            <hr>
            <p class="content_right-bottom-text">Tổng Tiền:</p>
            <div class="content_right-bottom-money">
                <p class="content_right-bottom-money-text">0.000đ</p>
                <div class="content_right-bottom-money-">
                    <button class="content_right-bottom-money-btn">Mua Vé</button>
                    <button class="content_right-bottom-cart-btn">Thêm Giỏ Hàng</button>
                </div>
            </div>
        </div>
        `
    filmTicketElement.appendChild(filmBuyTicket);
}
filmBuyTickets();


// hàm thay ảnh cho phần thanh toán khi bấm vào thanh toán.


function filmPay() {
    const filmPayAll = document.getElementById('buyTicket')
    const filmPays = document.createElement("div");
    filmPays.classList.add('buyTicket');
    filmPays.innerHTML = `
        <i class="fa-solid fa-x buyTicket_close"></i>
        <div class="buyTicket_film">
            <img src="./assets/css/img/${filmTicket.img}" alt="" class="buyTicket_film-img">
            <div class="buyTicket_film-all">
                <p class="content_right-top-flim-old">${filmTicket.old}</p>
                <p class="content_right-top-flim-name">${filmTicket.name}</p>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-film content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">Cinema Đà Lạt</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-location-dot content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">Quảng trường Lâm Viên, P.10,TP. Đà Lạt</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-calendar-days content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">14-01-2024</p>
                </div>
                <div class="content_right-top-flim-cinema">
                    <i class="fa-solid fa-clock content_right-top-flim-cinema-icon"></i>
                    <p class="content_right-top-flim-cinema-text">11h30 - 13h</p>
                </div>
                <p class="content_right-top-flim-cinema-time">Phòng Chiếu: 05 <strong>.</strong> 2D Lồng tiếng</p>
                <div class="buyTicket_seat">
                    <p class="content_right-bottom-text">Chổ Ngỗi: </p>
                </div>
                <p class="content_right-bottom-text">Tổng Tiền:</p>
                <p class="content_right-bottom-money-ticket">0.000đ</p>
                
            </div>
        </div>
        <div class="buyTicket_img-all">
            <img src="./assets/css/img/Shoppe_img.png" alt="" class="buyTicket_img">
            <img src="./assets/css/img/Mobile_app_img.jpeg" alt="" class="buyTicket_img">
            <img src="./assets/css/img/QR_PAY_img.png" alt="" class="buyTicket_img">
            <img src="./assets/css/img/The_ATM_img.png" alt="" class="buyTicket_img">
        </div>
        <div class="buyTicket_btn-all">
            <button class="content_right-bottom-money-btn ">Thanh Toán</button>
            <button class="content_right-bottom-cart-btn buyTicket_btn-cancel">Hủy Thanh toán</button>
        </div>
    `
    filmPayAll.appendChild(filmPays);
}

filmPay();



// hàm chạy element film bên phải ;
const rowFocus = document.querySelectorAll(".content_chair-row-singer");
const seat = document.querySelector(".content_right-bottom-seat");
const seatElement = document.querySelectorAll(".content_right-bottom-seat-element");
const seatElements = document.querySelectorAll(".content_chai-row-pair");
const cartBtn = document.querySelector(".content_right-bottom-cart-btn");
const seatTicket = document.querySelector(".buyTicket_seat");
const seatTickets = [];

rowFocus.forEach(function (element) {
    element.addEventListener("click", () => {
        if (element.classList.contains("content_chai-row-hover") || element.classList.contains("content_chair-row-focus")) {
            element.disabled = true;
            return;
        }
        element.classList.add("content_chair-row-focus");
        var seatElement = document.createElement("p");
        seatElement.className = "content_right-bottom-seat-element";
        seatElement.innerHTML = ` <span>${element.innerText}</span> <i class="fa-solid fa-xmark content_right-bottom-seat-icon"></i>`;
        seat.appendChild(seatElement);
        Price();
        var seatTicketElement = document.createElement("p");
        seatTicketElement.className = "content_right-bottom-seat-element-ticket";
        seatTicketElement.innerHTML = `${element.innerText}`;
        seatTicket.appendChild(seatTicketElement);
        PriceTicket();

        var iconClose = document.querySelectorAll(".content_right-bottom-seat-icon");
        iconClose.forEach(function (event) {
            event.addEventListener("click", () => {
                if (seatElement) {
                    seat.removeChild(seatElement);
                    element.classList.remove("content_chair-row-focus");
                    seatTicket.removeChild(seatTicketElement);
                    newPrice();
                    newPriceTicket();
                }
            })
        });
        seatTickets.push(seatElement.innerText);
        filmTicket.seats = seatTickets;
    });
});


// hàm tính tiền vé theo số ghế được thêm vào.

function Price() {
    const numberBtn = document.querySelectorAll(".content_right-bottom-seat-element").length;
    const price = numberBtn * 45;
    document.querySelector(".content_right-bottom-money-text").innerHTML = `${price}.000 đ`;
    filmTicket.price = price;
}

// hàm tính tiền vé theo số ghế được trừ đi.
function newPrice() {
    const numberBtn = document.querySelectorAll(".content_right-bottom-seat-element").length;
    const newPrice = numberBtn * 45;
    document.querySelector(".content_right-bottom-money-text").innerHTML = `${newPrice}.000 đ`;
}


// hàm tính tiền vé theo số ghế được thêm vào.

function PriceTicket() {
    const numberBtn = document.querySelectorAll(".content_right-bottom-seat-element-ticket").length;
    const price = numberBtn * 45;
    document.querySelector(".content_right-bottom-money-ticket").innerHTML = `${price}.000 đ`;
}

// hàm tính tiền vé theo số ghế được trừ đi.
function newPriceTicket() {
    const numberBtn = document.querySelectorAll(".content_right-bottom-seat-element-ticket").length;
    const newPrice = numberBtn * 45;
    document.querySelector(".content_right-bottom-money-ticket").innerHTML = `${newPrice}.000 đ`;
}

// Hàm kiểm tra localStorage, làm mới sản phẩm, hoặc là tạo object cho mảng.

const filmClick = JSON.parse(localStorage.getItem('FILM_USER_BUY')) || [];
function checkLocalStorage() {

    const filmIndex = filmClick.findIndex(item => item.id === filmTicket.id);

    if (filmIndex !== -1) {
        filmClick[filmIndex] = filmTicket;
    } else {
        filmClick.push(filmTicket);
    }

    localStorage.setItem("FILM_USER_BUY", JSON.stringify(filmClick));
    quantityTicket();
}

function quantityTicket(){
    document.querySelector('.header_right-number-element').innerHTML = filmClick.length;
}

quantityTicket();

// hàm tăng số sản phẩm vô giỏ hàng.
cartBtn.addEventListener("click", () => {
    checkLocalStorage();
    colorOld();
});

// Buy Ticket.

// Buy Ticket tắt

const closeBtn = document.querySelector('.buyTicket_close');
closeBtn.addEventListener("click", () => {
    document.getElementById("buyTicket").style = `display: none;`;
});

// Buy Ticket bật;

const buyBtn = document.querySelector(".content_right-bottom-money-btn");

buyBtn.addEventListener("click", () => {
    document.getElementById("buyTicket").style = `display: block;`;
});

// Buy Ticket tắt

const cancel = document.querySelector(".buyTicket_btn-cancel");

cancel.addEventListener("click", () => {
    document.getElementById("buyTicket").style = `display: none;`;
});

// tạo object cho ghế ngồi user đã chọn và tổng số tiền phải trả.

// thay đổi màu, thay đổi kích thước của tuổi.


function colorOld() {
    if (document.querySelector(".content_right-top-flim-old").innerHTML == "P") {
        document.querySelector(".content_right-top-flim-old").style = `font-size: 25px; padding: 4px 8px;`
    }
    else if (document.querySelector(".content_right-top-flim-old").innerHTML == "13+") {
        document.querySelector(".content_right-top-flim-old").classList.add("old_13");
    } else {
        document.querySelector(".content_right-top-flim-old").classList.add("old_18");
    }
}
colorOld();

