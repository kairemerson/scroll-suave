
const menuItems = document.querySelectorAll(".menu a")

menuItems.forEach(item => {
    item.addEventListener("click", scrollToOnClick)
})

function scrollToOnClick(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute("href")
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top: to - 70,
        behavior: "smooth"
    })
}