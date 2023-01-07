const menuCard = document.getElementById("menu-card")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")

menuBtn.addEventListener('click', () => {
    menuCard.classList.add("active")
})

closeBtn.addEventListener('click', () => {
    menuCard.classList.remove("active")
})

window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth
    if(screenWidth > 912){
        menuCard.classList.remove("active")
    }
})

const productList = [
    {
        id: 1,
        title: "pearl powder",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular01.jpg"
    },
    {
        id: 2,
        title: "Coco & Sandelwoo",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular02.jpg"
    },
    {
        id: 3,
        title: "Aromatic Blendr",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular03.jpg"
    },
    {
        id: 4,
        title: "Three Rose",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular04.jpg"
    },
    {
        id: 5,
        title: "Green Clay",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular05.jpg"
    },
    {
        id: 6,
        title: "Organic Beeswax",
        oldPrice: "32.00",
        newPrice: "19.50",
        poster: "./utilities/assets/popular06.jpg"
    },
]

const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")
const modalContainer = document.getElementById("modal-container")

function handleOpenModal(id){
    modalContainer.classList.add("active")
    let output = ""
    let clickedItem = productList.filter(prd => prd.id === id)[0]
    output = `
    <div class="modal-media">
        <img src="${clickedItem.poster}" alt="modal-poster">
    </div>
    <div class="modal-details">

        <div class="modal-contents">
            <h2 class="modal-product-title">${clickedItem.title}</h2>
            <div class="modal-price">
                <span class="modal-price-old">$${clickedItem.oldPrice}</span>
                <span class="modal-price-new">$${clickedItem.newPrice}</span>
            </div>
            <p class="in-stock">In Stock</p>
            <div class="quantity">
                <label for="quantity">quantity:</label>
                <input type="number" value="1">
            </div>
            <button class="add-card-btn">Add to card</button><br>
            <a href="#" class="modal-view-more">View more details</a>
            </div>

    </div>
    `

    modal.innerHTML = output
}

overlay.addEventListener('click', (ev) => {

    if(ev.target.className === "overlay"){
        modalContainer.classList.remove("active")
    }

}, false)

const careousel = document.getElementById("carousel")

displayPopular()
function displayPopular(){
    let output = ""
    productList.map(prd => {
        output += `
        <div class="swiper-slide product-item">
            <div class="product-view">
                <span class="sale-icon">Sale</span>
                <button 
                    class="view-modal-btn"
                    onclick="handleOpenModal(${prd.id})"
                >
                    Quick View
                </button>
                <img src="${prd.poster}" alt="popular">
            </div>
            <div class="product-item-content">
                <p class="product-name">${prd.title}</p>
                <div class="prices">
                    <span class="price-old">$${prd.oldPrice}</span>
                    <span class="price-new">$${prd.newPrice}</span>
                </div>
            </div>
        </div>
        `

        return output
    })

    careousel.innerHTML = output
}


let swiper = new Swiper(".mySwiper", { 
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
      },
  });