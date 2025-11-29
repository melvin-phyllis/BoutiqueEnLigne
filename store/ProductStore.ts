import { formarticleType } from '@/types'
import { create } from 'zustand'

type Store = {
    ProducstList: formarticleType[],

    getProducstList: (products: formarticleType[]) => void
    setProducstList: (product: formarticleType) => void
}

const useStore = create<Store>()((set) => ({
    ProducstList: [],

    getProducstList: (products) => set(() => ({ ProducstList: products })),

    setProducstList: (product) => set((state) => ({ ProducstList: [...state.ProducstList, product] })),
}))

export default useStore
