import { server } from "./server.js";

const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content")

form.addEventListener("submit", async(event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent =
      'Este vídeo não parece ser um "Short". Escolha um outro...')
  }

  const [_, params2] = videoURL.split("/shorts/")
  const [videoID] = params2.split("?si")
  // console.log(videoID)

  /* Como o params1 não precisa ser mostrado na tela, então eu posso ocultá-lo usando um "Underscore"(_) em seu lugar */

  content.textContent = "Obtendo o texto do áudio..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
  content.classList.remove("placeholder")
})