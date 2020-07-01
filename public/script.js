const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-acessadas')

const ul = document.querySelector('.hide-ingredientes')
const p1 = document.querySelector('.hide-prepare')
const p2 = document.querySelector('.hide-information')


for (let card of cards) {
    card.addEventListener("click", function () {
  
        const receitaId = card.getAttribute("id")
        window.location.href= `/receita?id=${receitaId}`
    })
}


