import IndexModel from '../models/IndexModel'

const indexModel = new IndexModel()
export default class IndexController {
  constructor() {

  }
  indexAction(app) {
    return async (ctx, next) => {
      // ctx.body = 'hello lynshir'
      ctx.state.name = 'lynshir'
      const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
      const result = await indexModel.getData()
      await ctx.render('index', {
        users,
        ip: '192.123.123.123',
        result
      });
    }
  }
  infoAction(app) {
    return async (ctx, next) => {
      // ctx.body = 'hello lynshir'
      ctx.state.name = 'lynshir'
      ctx.state.ip = '123123123123123'
      await ctx.render('ejs/info');
    }
  }
}