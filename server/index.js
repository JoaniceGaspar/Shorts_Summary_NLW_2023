import cors from "cors"
import express from "express"

import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summarize.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/summary/:id", async (request, response) => {
  await download(request.params.id)
  const result = await transcribe()

  return response.json({result})
})

app.post("/summary", async(request, response) => {
  const result = await summarize(request.body.text)
  return response.json({result})
})

app.listen(3333, () => console.log("Server is running on port 3333"))

/** As Arrow Functions () => são funções que se auto-executam sem que o programador necessite chamá-las. Até porque elas são criadas sem nome (funções anónimas) não tem como chamá-las portanto, elas foram são criadas com o objetivo de se auto executarem */
