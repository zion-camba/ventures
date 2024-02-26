'use client'

import { IProduct } from '@/app/Models/ProductModel'
import { BiInfoCircle, BiSolidTrash } from 'react-icons/bi'
import { deleteProduct } from '@/app/Helpers/Products'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../store'
import React from 'react'

interface ProductRowProps {
  product: IProduct
  removeOptimisticProduct: (productId: number) => void
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  removeOptimisticProduct,
}) => {
  const router = useRouter()

  const realCart = useCartStore((state: any) => state.realCart)
  const addtoCart = useCartStore((state: any) => state.addToCart)
  const removeToCart = useCartStore((state: any) => state.removeToCart)

  const handleViewProduct = (product_id) => {
    router.push(`/products/${product_id}`)
  }

  const handleDeleteProduct = (id: number) => {
    const indexToRemove = realCart.findIndex(
      (item: any) => item.product.id === id
    )
    if (indexToRemove !== -1) {
      const newArray = realCart.filter(
        (_: number, index: number) => index !== indexToRemove
      )
      removeToCart(newArray)
    }
  }
  const isAdded = realCart.find((item: any) => item.product.id === product.id)

  return (
    <tr key={product.id}>
      <td></td>
      <td>
        <div className='avatar'>
          <div className='w-24 rounded-xl'>
            <img src={product.image} alt={product.image} />
          </div>
        </div>
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <div className='flex space-x-2'>
          <button
            className='btn btn-outline btn-info'
            onClick={() => handleViewProduct(product.id)}
          >
            <BiInfoCircle size='2rem' />
          </button>

          {!isAdded && (
            <button
              className='btn btn-outline btn-info'
              onClick={() => addtoCart({ product })}
            >
              add
              {/* <BiSolidTrash size='2rem' /> */}
            </button>
          )}

          {isAdded && (
            <button
              className='btn btn-outline btn-info'
              onClick={() => handleDeleteProduct(product.id)}
            >
              delete
              {/* <BiSolidTrash size='2rem' /> */}
            </button>
          )}
        </div>
      </td>
    </tr>
  )
}

export default ProductRow
