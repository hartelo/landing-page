import React from "react"
import { Product } from "../product/Product"

export const Products: React.FC = () => {
  return (
    <>
      {[0, 1, 2].map(i => (
        <Product key={i} />
      ))}
    </>
  )
}
