// slider js

let listImg = document.querySelector(".slider_right-wrapper");
let elementImg = document.querySelectorAll(".slider_right-wrapper-show img");
let next = document.getElementById('next');
let prev = document.getElementById('prev');

var active = 0;
next.addEventListener("click", sliderNext);


function autoSlider() {
    deleteInterval = setInterval(timeAuto, 3000);
    function timeAuto() {
        sliderNext();
    }
}
autoSlider();


function sliderNext() {
    elementImg[active].style.animation = 'next 1s ease-in forwards';
    if (active >= elementImg.length - 1) {
        active = 0;
    }
    else {
        active++;
    }
    elementImg[active].style.animation = 'next1 1s ease-in forwards';
    clearInterval(deleteInterval);
    autoSlider();
}




prev.addEventListener("click", sliderPrev);
function sliderPrev() {
    elementImg[active].style.animation = 'prev 1s ease-in forwards';
    if (active == 0) {
        active = elementImg.length - 1
    }
    else {
        active--;
    }
    elementImg[active].style.animation = 'prev1 1s ease-in forwards';
    clearInterval(deleteInterval);
    autoSlider();
}

// js add phim đang chiếu.

const contentShow = document.querySelector(".content_show-flim");

let showFilms = [
    {
        id: 1,
        img: 'anh_1.jpg',
        old: 'P',
        rank: 1,
        name: 'Kung Fu PanDa 4',
        category: 'Hài, Hoạt Hình',
        vote: 8.6,
        background: ['background_kungfupanda1.jpg','background_kungfupanda2.jpg','background_kungfupanda3.jpg'],
        content: 'Sau khi Po được chọn trở thành Thủ lĩnh tinh thần của Thung lũng Bình Yên, Po cần tìm và huấn luyện một Chiến binh Rồng mới, trong khi đó một mụ phù thủy độc ác lên kế hoạch triệu hồi lại tất cả những kẻ phản diện mà Po đã đánh bại về cõi linh hồn.',
    },
    {
        id: 2,
        img: 'anh_2.jpg',
        old: '13+',
        rank: 2,
        name: 'Godzilla x Kong: Đế Chế Mới',
        category: 'Kinh dị',
        vote: 9.7,
        background: ['background_godzilla1.jpg','background_godzilla2.jpg','background_godzilla3.jpg'],
        content: 'Kong và Godzilla - hai sinh vật vĩ đại huyền thoại, hai kẻ thủ truyền kiếp sẽ cùng bắt tay thực thi một sứ mệnh chung mang tính sống còn để bảo vệ nhân loại, và trận chiến gắn kết chúng với loài người mãi mãi sẽ bắt đầu.',
    },
    {
        id: 3,
        img: 'anh_3.jpg',
        old: '18+',
        rank: 3,
        name: 'Exhuma: Quật Mộ Trùng Ma',
        category: 'Phiêu lưu,hành động',
        vote: '9.2',
        background: ['background_exhuma1.jpg','background_exhuma2.jpg','background_exhuma3.jpg'],
        content: 'Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.'
    },
    {
        id: 4,
        img: 'anh_4.jpg',
        old: '18+',
        rank: 4,
        name: 'Quỷ Cái',
        category: 'Kinh Dị',
        vote: '1.0',
        background: ['background_quycai1.jpg','background_quycai2.jpg','background_quycai3.jpg'],
        content: 'Được sự chỉ định của giáo sư, 5 sinh viên đại học năm cuối được mời đến dinh thự cổ thuộc sở hữu của dòng tộc danh giá ML.Salukjit. Trước khi quyết định ra đi hay ở lại, Ml.Salukjit đã khiến họ khiếp sợ trước sức mạnh ma quỷ của mình.'
    },
    {
        id: 5,
        img: 'anh_5.jpg',
        old: '18+',
        rank: 5,
        name: 'Trò Chơi Chết Chóc',
        category: 'Kinh dị',
        vote: '9.0',
        background: ['background_trochoichettroc1.jpg','background_trochoichettroc2.jpg','background_trochoichettroc3.jpg'],
        content: 'Tong và những người bạn chơi trốn tìm tại một ngôi nhà hoang. Bất ngờ, vụ nổ xảy ra khiến Noo Aon - người bạn được Tong đưa đi trốn ở nơi bí mật mắc kẹt. 13 năm sau, một em bé giống hệt Noo Aon xuất hiện và một loạt cái chết bí ẩn diễn ra trong hội bạn chơi trốn tìm năm đó.'
    }
];

function showFilm() {
    showFilms.forEach((value, key) => {
        let showFilmAll = document.createElement("div");
        showFilmAll.classList.add("content_show-flim-all");
        showFilmAll.innerHTML = `
            <div class="show-flim-all-element">
                <img src="./assets/css/img/${value.img}" alt="" class="show-flim-all-element-img">
                <div class="show-flim-element-text">
                    <p class="show-flim-element-old">${value.old}</p>
                    <i class="fa-regular fa-circle-play show-flim-element-icon"></i>
                    <p class="show-flim-element-number">${value.rank}</p>
                </div>
                <div class="content_show-product">
                    <a href="product.html" class="content_show-product-all" onclick = "detail(${key})" >Xem chi tiết</a>
                    <a href="book_tickers.html" class="content_show-product-all" onclick = "buyTicket(${key})">Mua vé</a>
                </div>
            </div>
            <div class="content_show-flim-name">
                <p class="flim-name">${value.name}</p>
                <p class="flim-category">${value.category}</p>
                <p class="content_show-flim-vote"><i class="fa-solid fa-star flim-vote-star "></i> ${value.vote}</p>
            </div>
        `
        contentShow.appendChild(showFilmAll);
    })
}
showFilm();

let comingFilms = [
    {
        id: 1,
        img: "anh_6.jpg",
        old: "P",
        name: "Những mảnh ghép cảm xúc",
        category: "Hài, Hoạt Hình"
    },
    {
        id: 2,
        img: "anh_7.jpg",
        old: "P",
        name: "Garfield - Mèo Béo Siêu...",
        category: "Hài, Phiêu lưu, Hoạt Hình"
    },
    {
        id: 3,
        img: "anh_8.jpg",
        old: "P",
        name: "Cậu Bé Đến Từ Trái...",
        category: "Gia Đình, Hài, Phiêu lưu"
    },
    {
        id: 4,
        img: "anh_9.jpg",
        old: "13+",
        name: "Argylle: Siêu Điệp Viên",
        category: "Phiêu lưu, Hành động"
    },
    {
        id: 5,
        img: "anh_10.jpg",
        old: "13+",
        name: "Godzilla x Kong: Đế Chế mới",
        category: "Khoa học viễn tưởng, Phiêu lưu"
    }
];


const contentComing = document.querySelector(".content_coming-flim");
function comingFilm() {
    comingFilms.forEach((value, key) => {
        let comingFilmAll = document.createElement("div");
        comingFilmAll.classList.add("content_coming-flim-all");
        comingFilmAll.innerHTML = `
            <div class="coming-flim-all-element">
                <img src="./assets/css/img/${value.img}" alt="" class="coming-flim-all-element-img">
                <div class="coming-flim-element-text">
                    <div class="old_move">
                        <p class="coming-flim-element-old">${value.old}</p>
                    </div>
                    <i class="fa-regular fa-circle-play coming-flim-element-icon"></i>
                </div>
            </div>
            <div class="content_coming-flim-name">
                <p class="flim-name">${value.name}</p>
                <p class="flim-category">${value.category}</p>
            </div>
        `
        contentComing.appendChild(comingFilmAll);
    })
};

comingFilm();

function showFilmOld() {
    let oldFilm = document.querySelectorAll(".show-flim-element-old");
    oldFilm.forEach(function (element) {
        const textOld = element.innerHTML;
        if (textOld == "13+") {
            element.classList.add("old_13");
        } else if (textOld == "18+") {
            element.classList.add("old_18");
        }
    })
}
showFilmOld();


function comingFilmOld() {
    let comingOldFilm = document.querySelectorAll(".coming-flim-element-old");
    comingOldFilm.forEach(function (element) {
        const textComingOld = element.innerHTML;
        if (textComingOld == "13+") {
            element.classList.add("old_13");
        } else if (textComingOld == "18+") {
            element.classList.add("old_18");
        }
    })
}
comingFilmOld();


// hàm click chuyển sang mua vé
function buyTicket(key) {
    localStorage.setItem('FILM_USER_CLICK', JSON.stringify(showFilms[key]));
}

// hàm click chuyển sang xem chi tiết;
function detail(key){
    localStorage.setItem('FILM_USER_CLICK', JSON.stringify(showFilms[key]));
}

// hàm hiển thị số lượng sản phẩm đang có trong cart.
const cartfilm = JSON.parse(localStorage.getItem('FILM_USER_BUY'));

function quantityTicket() {
    document.querySelector('.header_right-number-element').innerHTML = cartfilm.length;
}

quantityTicket();

// hàm flash sale 

function flashSale() {
    let timeEnd = new Date(2024,4,27);
    let times = new Date().getTime();
    let timeSale = timeEnd.getTime() - times; 
    let seconds = addLeadingZero(Math.floor((timeSale % (1000 * 60))/ (1000)));
    let minutes = addLeadingZero(Math.floor((timeSale % (1000*60*60))/(1000*60)));
    let hours = addLeadingZero(Math.floor((timeSale % (1000*60*60*24)) / (1000*60*60)));
    let days = addLeadingZero(Math.floor(timeSale / (1000*60*60*24)));
    console.log(days);
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("days").innerHTML = days;
};

function addLeadingZero(num) {
    return (num < 10 ? "0" : "") + num;
}

setInterval(flashSale, 1000);

// hàm chạy click của nút đăng ký;
document.querySelector(".register").addEventListener("click", function registerHref(event){
    localStorage.setItem("REGISTER","true");
})

