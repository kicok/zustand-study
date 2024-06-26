import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
const foodRecord: Record<string, number> = {};
const foodArr: number[] = [];
const initialFoodvalue = {
  fish: 0,
  mouse: 0,
  foodRecord,
  foodArr,
};

export const useFoodStore = create<typeof initialFoodvalue>()(
  // immer(
  devtools(
    subscribeWithSelector(
      persist(() => initialFoodvalue, {
        name: 'food store',
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !['foodRecord', 'foodArr'].includes(key)
            )
          ),
      })
    ),
    {
      name: 'food store',
    }
  )
);
// );

export const addOneFish = () => useFoodStore.setState((s) => ({ fish: s.fish + 1 }));

export const removeOneFish = () =>
  useFoodStore.setState((s) => ({ fish: s.fish - 1 }));

export const removeAllFish = () => useFoodStore.setState({ fish: 0 });

export const foodArrPush = (rowId: string, totalCalorie: number) => {
  const obj = useFoodStore.getState().foodRecord;
  obj[rowId] = totalCalorie;
  useFoodStore.setState({ foodRecord: obj });
};

export const changeBox = (rowId: string, totalCalorie: number) => {
  const obj = useFoodStore.getState().foodRecord;
  obj[rowId] = totalCalorie;
  useFoodStore.setState({ foodRecord: obj });
};
export const foodArrPush2 = (totalCalorie: number) => {
  useFoodStore.setState((s) => ({
    foodArr: [...s.foodArr, totalCalorie],
  }));
};

export const changeBox2 = (rowId: number, totalCalorie: number) => {
  const foodArr = useFoodStore.getState().foodArr;
  foodArr[+rowId] = totalCalorie;
  useFoodStore.setState({ foodArr: foodArr });
};

// type TFoodStoreState = {
//   fish: number;
//   addOneFish: () => void;
//   removeOneFish: () => void;
//   removeAllFish: () => void;
// };

// export const useFoodStore2 = create<TFoodStoreState>()(
//   devtools(
//     subscribeWithSelector(
//       persist(
//         (set) => ({
//           fish: 0,
//           addOneFish: () => set((state) => ({ fish: state.fish + 1 })),

//           removeOneFish: () => set((state) => ({ fish: state.fish - 1 })),

//           removeAllFish: () => set({ fish: 0 }),
//         }),
//         {
//           name: 'food store',
//         }
//       )
//     ),
//     {
//       name: 'food store',
//     }
//   )
// );
