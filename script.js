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



// DARK MODE

const darkModeBtn =
document.getElementById("darkModeBtn")


darkModeBtn.onclick = () => {

  document.body.classList.toggle("dark")

}



// CHAT OPEN

// CHAT OPEN

const chatBox =
document.getElementById("chatBox")



// CUSTOM CURSOR

const cursor =
document.querySelector(".cursor")


document.addEventListener("mousemove",
(e) => {

  cursor.style.left = e.clientX + "px"

  cursor.style.top = e.clientY + "px"

})



// REVEAL ANIMATION

function reveal(){

  const reveals =
  document.querySelectorAll(".reveal")


  reveals.forEach(reveal => {

    const windowHeight =
    window.innerHeight

    const revealTop =
    reveal.getBoundingClientRect().top


    if(revealTop < windowHeight - 100){

      reveal.classList.add("active")

    }

  })

}

window.addEventListener("scroll",
reveal)

reveal()



// AI CHAT SYSTEM

const sendBtn =
document.getElementById("sendBtn")

const userInput =
document.getElementById("userInput")

const messages =
document.getElementById("messages")



sendBtn.onclick = sendMessage

userInput.addEventListener("keypress",
(e) => {

  if(e.key === "Enter"){

    sendMessage()

  }

})



async function sendMessage(){

  let text =
  userInput.value.trim()


  if(text === "") return



  messages.innerHTML += `

  <div class="user-message">
    ${text}
  </div>

  `



  messages.scrollTop =
  messages.scrollHeight



  userInput.value = ""



  try{



    const response =
    await fetch(

    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=",

    {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        contents: [

          {
            parts: [
              { text: text }
            ]
          }

        ]

      })

    })



    const data =
    await response.json()



    let reply =
    data.candidates[0].content.parts[0].text



    messages.innerHTML += `

    <div class="bot-message">
      ${reply}
    </div>

    `



    messages.scrollTop =
    messages.scrollHeight



  }



  catch(error){



    messages.innerHTML += `

    <div class="bot-message">
      Error connecting to AI 
    </div>

    `

  }
}
reveal()

