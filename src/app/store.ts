import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  cart: number
}

export const useCartStore = create<State>(
  persist(
    (set: any) => ({
      cart: 0,
      realCart: [],
      increasePopulation: () =>
        set((state: { cart: number }) => ({ cart: state.cart + 1 })),
      removeAllBears: () => set({ cart: 0 }),
      addToCart: (cart: any) =>
        set((state: { realCart: any }) => ({
          realCart: [cart, ...state.realCart],
        })),
      removeToCart: (cart: any) =>
        set(() => ({
          realCart: cart,
        })),
    }),
    {
      name: 'cart',
    }
  )
)
