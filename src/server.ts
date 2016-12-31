import * as Koa from 'koa'
import * as Router from 'koa-router'
import 'source-map-support/register'

const app = new Koa()
const router = new Router()

router.get('/', function * (next) {
  this.body = 'hello, world2.'
})

app.use(router.routes())

app.listen(8080)
