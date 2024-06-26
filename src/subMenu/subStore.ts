import { create } from 'zustand';

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  dispatch: (action: Action) => void;
};

type Action = {
  type: keyof Actions;
  qty: number;
};

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty };
    case 'decrement':
      return { count: state.count - action.qty };
    default:
      return state;
  }
};

export const useSubMenuStore = create<State & Actions>()((set, get) => ({
  count: 10,
  dispatch: (action: Action) => set((state) => countReducer(state, action)),
  increment: () => set({ count: get().count + 1 }),
  decrement: () => set({ count: get().count - 1 }),
}));
