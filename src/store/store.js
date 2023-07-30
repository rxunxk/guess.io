import { create } from 'zustand'

export const useStore = create((set) => ({
  user:{},
  setUser: (user) => set(() => ({user : user})),
  usersArray:['sfdf'],
  setUsersArray: (usersArray) => set(() => ({usersArray : usersArray})),


}))













