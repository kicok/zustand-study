import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type TBearStoreState = {
  bears: number;
  name: string;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
  reset: () => void;

  // getOwner: () => Promise<void>;
};

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      name: '',
      color: 'red',
      size: 'big',
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      // getOwner: async () => {
      //   const response = await fetch('https://api.github.com/users/1');
      //   const owner = await response.json();
      //   console.log(owner.name);
      //   set({ name: owner.name });
      // },

      reset: () =>
        set((state) => ({
          bears: state.bears,
          color: 'red',
          size: 'big',
          name: '',
        })),
    }),

    {
      name: 'bear store',
      // storage: createJSONStorage(() => localStorage),
      // storage: createJSONStorage(() => sessionStorage),
      // partialize: (state) => ({ bears: state.bears }),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['size', 'color'].includes(key))
        ),
    }
  )
);
