

/**
 * @class Model入口类
 * @author lynshir
 */
export default class IndexModel {
  /**
   * 
   * @param {object} app ctx上下文对象 
   */
  constructor(app) {

  }

  /**
   * @returns promise
   */
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolve成功----')
      }, 1000)
    })
  }
}