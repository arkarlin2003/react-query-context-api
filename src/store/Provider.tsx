import React, { ReactNode } from "react"
import CartProvider from "./CartProvider"


const Provider:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <CartProvider>
        {children}
    </CartProvider>
  )
}

export default Provider