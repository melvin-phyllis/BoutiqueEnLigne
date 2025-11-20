import { formarticle } from '@/types'
import { set } from 'firebase/database'
import { create } from 'zustand'

type Store = {
    ProducstList: formarticle[],

    getProducstList: (products: formarticle[]) => void
    setProducstList: (product: formarticle) => void
}

const useStore = create<Store>()((set) => ({
    ProducstList: [],

    getProducstList: (products) => set(() => ({ProducstList: products})),

    setProducstList: (product) => set((state) => ({ ProducstList: [...state.ProducstList, product] })),
}))

export default useStore
