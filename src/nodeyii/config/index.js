import _ from 'lodash'

const init = (() => {
  let config = {
    viewDir: ''
  }
  let localConfig = {}
  //所谓流清洗就是去掉没用的配置文件，在这里将process.env.NODE_ENV换成'production' 之后开发环境条件就成了false,production!==development
  if (process.env.NODE_ENV === 'development') {
    localConfig = {
      port: 8787
    }
  }
  if (process.env.NODE_ENV === 'production') {
    localConfig = {
      port: 8788
    }
  }
  Object.assign(config, localConfig)
  return config
})()

export default init