import { create } from 'zustand'

export const useStore = create((set) => ({
  room: '',
  setRoom: (room) => set((state) => ({ room: room })),
}))













