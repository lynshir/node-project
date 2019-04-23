import IndexController from './IndexController'
const controllers = new IndexController()
export default (app, router) => {
  router.get('/', controllers.indexAction(app));
  router.get('/info', controllers.infoAction(app));
}