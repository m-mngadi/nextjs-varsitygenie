import { create } from 'zustand'

export interface NavbarState {
    isExpanded : boolean, 
    setExpanded : (isExpanded : boolean) => void
}

export const useNavbarStore = create<NavbarState>()((set) => ({
  isExpanded: false,
  setExpanded: (isExpanded : boolean) => set({isExpanded}),
}))