import { create } from "zustand";

export const useStore = create((set) => ({
  user:{},
  setUser: (user) => set(() => ({user : user})),
  usersArray:['no User'],
  setUsersArray: (usersArray) => set(() => ({usersArray : usersArray})),


}))

export const useToolbar = create((set) => ({
  strokeColor: "#000000",
  strokeWidth: 3,
  setStrokeColor: (strokeColor) => set(() => ({ strokeColor: strokeColor })),
  setStrokeWidth: (strokeWidth) => set(() => ({ strokeWidth: strokeWidth })),
}));
