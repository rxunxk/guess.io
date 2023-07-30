import { create } from "zustand";

export const useStore = create((set) => ({
  room: "",
  // eslint-disable-next-line no-unused-vars
  setRoom: (room) => set((state) => ({ room: room })),
}));

export const useToolbar = create((set) => ({
  strokeColor: "black",
  strokeWidth: 3,
  setStrokeColor: (strokeColor) => set(() => ({ strokeColor: strokeColor })),
  setStrokeWidth: (strokeWidth) => set(() => ({ strokeWidth: strokeWidth })),
}));
