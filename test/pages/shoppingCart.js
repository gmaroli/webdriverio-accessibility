import BasePage from './base'

class ShoppingCart extends BasePage{
    
    open(){
        super.open('?controller=order')
    }
    
}

export default new ShoppingCart()