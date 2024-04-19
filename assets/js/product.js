// hàm thay đổi nội dung, hình ảnh, background của chi tiết phim.
let productFilm = JSON.parse(localStorage.getItem("FILM_USER_CLICK"));
console.log(productFilm);
const productContent = document.querySelector(".content_product");
function product() {
    const productElement = document.createElement("div");
    productElement.classList.add("content_product");
    productElement.innerHTML = `
    <div class="content_product-top">
    <img src="./assets/css/img/${productFilm.img}" alt="" class="content_product-img">
    <div class="content_product-between">
        <p class="content_product-between-old">${productFilm.old}</p>
        <h3 class="content_product-between-name">${productFilm.name}</h3>
        <div class="content_product-between-produce">
            <p class="content_product-between-produce-text">magration</p>
            <p class="content_product-between-produce-text">.</p>
            <p class="content_product-between-produce-text">2024</p>
            <p class="content_product-between-produce-text">.</p>
            <p class="content_product-between-produce-text">83 phút</p>
        </div>
        <div class="content_product-between-vote">
            <i class="fa-solid fa-star content_product-between-vote-icon"></i>
            <p class="content_product-between-vote-text">${productFilm.vote}</p>
        </div>
        <div class="content_product-between-voiceover">
            <p>2D</p>
        </div>
            <a href="book_tickers.html"><button class="content_product-between-btn">Mua Vé</button></a>
        </div>
        <p class="content-product-between-pragrap">${productFilm.content}</p>
    </div>
    <div class="content_product-end">
        <button onclick="background1()"><img src="./assets/css/img/${productFilm.background[0]}" alt=""></button>
        <button onclick="background2()"><img src="./assets/css/img/${productFilm.background[1]}" alt=""></button>
        <button onclick="background3()"><img src="./assets/css/img/${productFilm.background[2]}" alt=""></button>
    </div>
    `
    productContent.style.backgroundImage = `url(./assets/css/img/${productFilm.background[0]})`;
    productContent.appendChild(productElement);
}
product();




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
        background: ['background_kungfupanda1.jpg', 'background_kungfupanda2.jpg', 'background_kungfupanda3.jpg'],
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
        background: ['background_godzilla1.jpg', 'background_godzilla2.jpg', 'background_godzilla3.jpg'],
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
        background: ['background_exhuma1.jpg', 'background_exhuma2.jpg', 'background_exhuma3.jpg'],
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
        background: ['background_quycai1.jpg', 'background_quycai2.jpg', 'background_quycai3.jpg'],
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
        background: ['background_trochoichettroc1.jpg', 'background_trochoichettroc2.jpg', 'background_trochoichettroc3.jpg'],
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
                    <a href="book_tickers.html" class="content_show-product-all" onclick="buyTicket(${key})">Mua vé</a>
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

// hàm hiện thị số lượng sản phẩm đang có trong cart.
const cartfilm = JSON.parse(localStorage.getItem('FILM_USER_BUY'));
function quantityTicket() {
    document.querySelector('.header_right-number-element').innerHTML = cartfilm.length;
}

quantityTicket();




function background1() {
    document.querySelector('.content_product').style.backgroundImage = `url(./assets/css/img/${productFilm.background[0]})`;
}

function background2() {
    document.querySelector('.content_product').style.backgroundImage = `url(./assets/css/img/${productFilm.background[1]})`;
}

function background3() {
    document.querySelector('.content_product').style.backgroundImage = `url(./assets/css/img/${productFilm.background[2]})`;
}
// hàm thay đổi màu của old.
function colorOld() {
    if (document.querySelector(".content_product-between-old").innerHTML == "P") {
        return;
    }
    else if (document.querySelector(".content_product-between-old").innerHTML == "13+") {
        document.querySelector(".content_product-between-old").classList.add("old_13");
        document.querySelector(".content_product-between-old").style = `height: 30px; width: 45px;`
    } else {
        document.querySelector(".content_product-between-old").classList.add("old_18");
        document.querySelector(".content_product-between-old").style = `height: 30px; width: 45px;`

    }
}
colorOld();


// hàm click chuyển sang mua vé 
function buyTicket(key) {
    localStorage.setItem('FILM_USER_CLICK', JSON.stringify(showFilms[key]));
}

// hàm click chuyển sang xem chi tiết;
function detail(key){
    localStorage.setItem('FILM_USER_CLICK', JSON.stringify(showFilms[key]));
}