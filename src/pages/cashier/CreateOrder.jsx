import React from 'react'
import ProductSection from './ProductSection/ProductSection'
import CartSection from './CartSection/CartSection'
import CustomerPaymentSection from './CustomerPaymentSection/CustomerPaymentSection'
import POSHeader from './Header/POSHeader'

const CreateOrder = () => {
  return (
    <div className="h-full flex flex-col bg-background">
    <POSHeader/>
        <div className="flex flex-1 overflow-hidden">
            <ProductSection/>
            <CartSection/>
            <CustomerPaymentSection/>
        </div>
        {/* <HeldOrderDialog/> */}
    </div>
  )
}

export default CreateOrder