import ytdl from "ytdl-core" // Para Download de videos no Youtube
import fs from "fs" /* Uma biblioteca já disponível no node para Manipular de arquivos (não precisamos instalá-la)*/

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID
  console.log("Realizando o download do vídeo: " + videoID)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error(" A duração deste vídeo é maior do que 60 segundos.")
      }
  
    })
    .on("end", () => {
      console.log("Download finalizado com Sucesso!")
    })
    .on("error", (error) => {
      console.log("Não foi possível fazer o download do vídeo. Detalhes do erro: ", error)
    }).pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
