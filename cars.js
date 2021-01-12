window.addEventListener('DOMContentLoaded', () =>  {
    const orderButtons = document.querySelectorAll('button[data-order]')
    orderButtons.forEach((item)=> {
        item.addEventListener('click', (event) => {
            const button = event.currentTarget
            const container = button.parentNode
            const order = {
                id: button.getAttribute("data-order"),
                title : container.querySelector(".title").innertext,
                price : container.querySelector(".price").innertext,
            }
            localStorage.setItem("order", JSON.stringify(order))
            const url = window.location.href.replace("cars.html", "order.html")
            window.location.href = url
        })
    })
})
