import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'


export default {
  addCart(context, payload){
    //let oldProduct = null
    //payload新添加的商品
    //for (let item in state.cartList)  {
    //if (item.iid = payload.iid) {
    //oldProduct = item;
    //}
    //}

    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)

      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve("+1")
      } else {
        resolve("成功")
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
      }
    })


  }

}

