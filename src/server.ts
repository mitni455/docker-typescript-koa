import * as Koa from 'koa'
import * as Router from 'koa-router'
import 'source-map-support/register'

const app = new Koa()
const router = new Router()

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

router.get('/', function * (next) {
  const wait = yield sleep()
  this.body = 'hello, world.'
})

app.use(router.routes())

app.listen(8080)
