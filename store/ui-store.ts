import { create } from "zustand";

interface UIStore {
  sidebarCollapsed: boolean;

  notifications: number;

  toggleSidebar: () => void;

  setNotifications: (
    count: number
  ) => void;
}

export const useUIStore =
  create<UIStore>((set) => ({
    sidebarCollapsed: false,

    notifications: 3,

    toggleSidebar: () =>
      set((state) => ({
        sidebarCollapsed:
          !state.sidebarCollapsed,
      })),

    setNotifications: (
      count
    ) =>
      set({
        notifications: count,
      }),
  }));