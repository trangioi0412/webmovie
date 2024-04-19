const cartfilm = JSON.parse(localStorage.getItem('FILM_USER_BUY'));
const contentFilm = document.getElementById('content');

// hàm tạo film cho cart
function cartTicker(){
    cartfilm.forEach((element,key) => {
        function cartfilms() {
            const cartFilmBuy = document.createElement("div");
            cartFilmBuy.classList.add("content");
            cartFilmBuy.innerHTML = `
            <div class="content">
                <div class="content_top">
                    <img src="./assets/css/img/${element.img}" alt="" class="content_img">
                    <div class="content_flimm">
                        <h3 class="content_flim-name">${element.name}</h3>
                        <p class="content_flim-old">${element.old}</p>
                        <div class="content_flim-cinema">
                            <i class="fa-solid fa-film content_flim-cinema-icon"></i>
                            <p class="content_flim-cinema-text">Cinema Đà Lạt</p>
                        </div>
                        <div class="content_flim-cinema">
                            <i class="fa-solid fa-location-dot content_flim-cinema-icon"></i>
                            <p class="content_flim-cinema-text">Quảng trường Lâm Viên, P.10,TP. Đà Lạt</p>
                        </div>
                        <div class="content_flim-cinema">
                            <i class="fa-solid fa-calendar-days content_flim-cinema-icon"></i>
                            <p class="content_flim-cinema-text">14-01-2024</p>
                        </div>
                        <div class="content_flim-cinema">
                            <i class="fa-solid fa-clock content_flim-cinema-icon"></i>
                            <p class="content_flim-cinema-text">11h30 - 13h</p>
                        </div>
                        <p class="content_flim-cinema-time">Phòng Chiếu: 05 <strong>.</strong> 2D Lồng tiếng</p>
                        <p class="">Ghế: ${element.seats}</p>
                    </div>
                    <div class="content_payment">
                        <p class="content_payment-text">Số Lượng: ${element.seats.length}</p>
                        <p class="content_payment-text">Tổng Tiền: ${element.price}.000đ</p>
                    </div>
                </div>
                <div class="content_button">
                    <button class="content_button-btn">Hỗ Trợ</button>
                    <button class="content_button-btn content_button-cancel" onclick="delletTicket(${key})">Hủy Vé</button>
                    <button class="content_button-btn">Mua Vé</button>
                </div>
            </div>
            `
            contentFilm.appendChild(cartFilmBuy);
        }
        cartfilms();
    });
};

cartTicker();


// ham thay doi mau cua old
function changeColor() {
    let oldColor = document.querySelectorAll('.content_flim-old');
    oldColor.forEach((element) => {
        if (element.innerHTML === "13+") {
            element.classList.add("old_13");
            element.style.height = 35 + 'px';
            element.style.width = 45 + 'px';
            element.style.padding = 10 + 'px';
        }else if(element.innerHTML === "18+"){
            element.classList.add("old_18");
            element.style.height = 35 + 'px';
            element.style.width = 45 + 'px';
            element.style.padding = 10 + 'px';
        }
    })
}
changeColor();
 
// hàm xóa phim trong cart.
function delletTicket(key){
    cartfilm.splice(key, 1);
    contentFilm.innerHTML = "";
    localStorage.setItem('FILM_USER_BUY', JSON.stringify(cartfilm));
    cartTicker();
    quantityTicket()
};

// hàm hiện thị số sản phẩm có trong giỏ hàng.
function quantityTicket(){
    document.querySelector('.header_right-number-element').innerHTML = cartfilm.length;
}

quantityTicket();

