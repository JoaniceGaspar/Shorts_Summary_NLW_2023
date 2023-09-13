import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({result: "Download realizado com sucesso"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))

/** As Arrow Functions () => são funções que se auto-executam sem que o programador necessite chamá-las. Até porque elas são criadas sem nome (funções anónimas) não tem como chamá-las portanto, elas foram são criadas com o objetivo de se auto executarem */
