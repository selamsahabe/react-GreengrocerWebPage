import { create } from 'zustand'

export const useStore = create((set) => ({
  isModalOpen:false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  cart: [],
  totalPrice: 0,
  removeProduct: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalPrice: state.totalPrice - product.price * product.quantity,
    })),

  addProduct: (product) =>
      set((state) => {

        const index = state.cart.findIndex((item) =>item.id === product.id);
        
          if (index !== -1) {
          state.cart [index].quantity += 1;      
          } else {
          state.cart.push({...product, quantity: 1 });        
        }
        
        return {        
          cart: [...state.cart],       
          totalPrice: state.totalPrice + product.price,        
          };        
        }),
          
        removeOne: (product) =>
          set((state) => {       
          const index = state.cart.findIndex((item) => item.id ===      
          product.id);
          
          if (index !== -1) {        
          if (state.cart [index].quantity > 1) {       
          state.cart[index].quantity -= 1;       
          } else {        
          state.cart.splice(index, 1);        
          }        
        }
        
        return {
          cart: [...state.cart],        
          totalPrice: state.totalPrice - product.price,       
          };       
          }),       
          clearCart: () => {
          set({
          cart: [],       
          totalPrice: 0,      
        });      
      },      
  }));