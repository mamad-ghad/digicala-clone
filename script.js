//header lists 

let kalaCategory = document.querySelector(".kala-category")
let thirdHiddenRow = document.querySelector(".third-hidden-row")
let kalaCategoryAactive = false
let thirdHiddenRowActive = false

kalaCategory.addEventListener("mouseenter",(e)=>{
    kalaCategoryAactive = true
    thirdHiddenRow.classList.add("active")
})
thirdHiddenRow.addEventListener("mouseenter",(e)=>{
    thirdHiddenRowActive = true
    thirdHiddenRow.classList.add("active")
})

kalaCategory.addEventListener("mouseleave",(e)=>{
    kalaCategoryAactive = false
    hideBigList()
})
thirdHiddenRow.addEventListener("mouseleave",(e)=>{
    thirdHiddenRowActive = false
    hideBigList()
})

function hideBigList() {
    if (kalaCategoryAactive ===false && thirdHiddenRowActive ===false) {
        thirdHiddenRow.classList.remove("active")
    }
}

//detail list showing

let mainLists = document.querySelectorAll(".third-hidden-row .list-wrapper .main-list .list-title")
let detailListParts = document.querySelectorAll(".detailed-list-wrapper > .detailed-list")
let activeListNumb = 0


mainLists.forEach((list,index)=>{
    list.addEventListener("mouseenter",(e)=>{
        activeListNumb = index
        showDetailedList()
    })
})

function showDetailedList() {
    mainLists.forEach(list=>list.classList.remove("active-l"))
    mainLists[activeListNumb].classList.add("active-l")
    detailListParts.forEach(detailedListp=>detailedListp.classList.remove("active"))
    detailListParts[activeListNumb].classList.add("active")

}

// top slideshow

let topSlidshow = document.querySelector(".top-slideshow")
let topSlides = document.querySelectorAll(".top-slideshow > .slides > .slide")
let buttonSlideWrapper = document.querySelector(".top-slideshow > .slide-buttons")
let buttonsTopSlide = document.querySelectorAll(".top-slideshow > .slide-buttons > span")
let arrowWrapper = document.querySelector(".top-slideshow .slide-arrow")
let SlideTopArrows = document.querySelectorAll(".top-slideshow .arrow")
let activedNumb = 0

topSlidshow.addEventListener("mouseenter",(e)=>{arrowWrapper.classList.add("active")})
topSlidshow.addEventListener("mouseleave",(e)=>{arrowWrapper.classList.remove("active")})

SlideTopArrows.forEach(ar=>{
    ar.addEventListener("click",(e)=>{
        if (ar.classList.contains("arrow-right")) {
            activedNumb = (activedNumb == 0) ? topSlides.length -1 : activedNumb -1
            switchSlide()
        }else{
            goNext()
        }
    })
})


function goNext() {
    activedNumb = (activedNumb == topSlides.length - 1) ? 0 : activedNumb + 1
    switchSlide()
}

function switchSlide() {
    topSlides.forEach(slide=>{slide.classList.remove("active-s")})
    topSlides[activedNumb].classList.add("active-s")
    buttonsTopSlide.forEach(button=>{button.classList.remove("active-s")})
    buttonsTopSlide[activedNumb].classList.add("active-s")
}



setInterval(goNext, 2000);













