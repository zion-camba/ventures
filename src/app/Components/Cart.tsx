'use client'

import { ProductResponse } from '@/app/Models/ProductModel'
import React from 'react'
import ProductRow from '@/app/Components/ProductRow'
import { useCartStore } from '../store'

const Cart: React.FC = ({}) => {
  const realCart = useCartStore((state: any) => state.realCart)
  // const getTotal = realCart.map((item) => {
  //   num = num + item.unitPrice
  // })

  const getTotal = () => {
    const totalSum = realCart.reduce(
      (acc, curr) => acc + parseFloat(curr.product.price),
      0
    )
    const value = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    }).format(totalSum)
    return value
  }

  if (!realCart.length) return

  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {realCart.length ? (
            <>
              {realCart.map((product) => (
                <ProductRow
                  type='cart'
                  key={product.product.id}
                  product={product.product}
                  // removeOptimisticProduct={removeOptimisticProduct}
                />
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={5} className='text-center'>
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      total: {getTotal()}
    </div>
  )
}

export default Cart
