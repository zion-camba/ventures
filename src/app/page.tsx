import { getProducts } from '@/app/Helpers/Products'
import ProductList from '@/app/Components/ProductList'
import Cart from '@/app/Components/Cart'
export default async function Home() {
  // Directus: Product Lists
  const products = await getProducts()

  return (
    <>
      <main className='flex'>
        <ProductList products={products} />
        <Cart />
      </main>
    </>
  )
}
