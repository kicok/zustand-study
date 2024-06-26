import { useSubMenuStore } from './subStore';

export const SubMenu = () => {
  const { count, increment, decrement, dispatch } = useSubMenuStore();

  return (
    <div className='box'>
      {count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};
