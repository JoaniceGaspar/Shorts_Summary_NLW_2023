const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent =
      'Este vídeo não parece ser um "Short". Escolha um outro...')
  }

  const [_, params2] = videoURL.split("/shorts/")
  const [videoID] = params2.split("?si")
  console.log(videoID)

  /* Como o params1 não precisa ser mostrado na tela, então eu posso ocultá-lo usando um "Underscore"(_) em seu lugar */

  content.textContent = "Obtendo o texto do áudio..."
})