import express from 'express'
import { decode } from 'jsonwebtoken'
import { AuthenticationRouter } from './router/authentication.router'
import { UserRouter } from './router/user.router'

const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/auth', AuthenticationRouter)
app.use('/user', UserRouter)

app.get('', (req, res) => {
  res.json({
    'message': 'Hello, world!'
  })
})

app.use('/protected', (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]
  if(token) {
    const jwt = decode(token, {json: true})
    if(jwt?.admin  === true) {
      next()
    } else {
      res.sendStatus(401)
    }
  } else {
    res.sendStatus(400)
  }
}, (req, res) => {
  res.json({
    message: 'Such authenticate. Very allow. So access. Wow!'
  })
})

app.listen(port, () => {
  console.log(`Running 'authentication' on ${port}`)
})