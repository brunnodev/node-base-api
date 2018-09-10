import express from 'express'
import bodyParser from 'body-parser'
import filesLoader from 'consign'

const app = express()

app.use(bodyParser())

filesLoader({ cwd: 'api' })
  .then('middleware')
  .then('routers')
  .into(app)

app.listen(3000, () => {
  console.log('App listening on 3000')
})
