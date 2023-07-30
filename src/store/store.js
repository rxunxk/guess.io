import { create } from "zustand";

export const useStore = create((set) => ({
  user:{},
  setUser: (user) => set(() => ({user : user})),
  usersArray:['sfdf'],
  setUsersArray: (usersArray) => set(() => ({usersArray : usersArray})),


}))

export const useToolbar = create((set) => ({
  strokeColor: "black",
  strokeWidth: 3,
  setStrokeColor: (strokeColor) => set(() => ({ strokeColor: strokeColor })),
  setStrokeWidth: (strokeWidth) => set(() => ({ strokeWidth: strokeWidth })),
}));
