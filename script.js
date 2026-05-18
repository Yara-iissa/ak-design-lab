// LOADER

window.onload = () => {

  document
  .getElementById("loader")
  .classList.add("hide")

}



// SEARCH

const searchInput =
document.getElementById("searchInput")

const cards =
document.querySelectorAll(".card")


searchInput.addEventListener("keyup",
() => {

  let value =
  searchInput.value.toLowerCase()


  cards.forEach(card => {

    let name =
    card.dataset.name


    if(name.includes(value)){

      card.style.display = "block"

    }

    else{

      card.style.display = "none"

    }

  })

})



// FILTER

const buttons =
document.querySelectorAll(".category-btn")


buttons.forEach(button => {

  button.addEventListener("click",
  () => {

    document
    .querySelector(".active")
    .classList.remove("active")


    button.classList.add("active")


    let category =
    button.dataset.category


    cards.forEach(card => {

      if(category === "all"){

        card.style.display = "block"

      }

      else if(card.dataset.category
      === category){

        card.style.display = "block"

      }

      else{

        card.style.display = "none"

      }

    })

  })

})