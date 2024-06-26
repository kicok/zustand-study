import { shallow } from 'zustand/shallow';
import { useICatStore } from '../stores/catStore';

export const CatsController = () => {
  // const { increaseBigCats, increaseSmallCats } = useICatStore();
  // const increaseBigCats = useICatStore((s) => s.increaseBigCats);
  // const increaseSmallCats = useICatStore((s) => s.increaseSmallCats);
  // const increaseBigCats = useICatStore.use.increaseBigCats();
  // const increaseSmallCats = useICatStore.use.increaseSmallCats();

  // const { increaseBigCats, increaseSmallCats } = useICatStore(
  //   (s) => ({
  //     increaseBigCats: s.increaseBigCats,
  //     increaseSmallCats: s.increaseSmallCats,
  //   }),
  //   shallow
  // );

  const [increaseBigCats, increaseSmallCats] = useICatStore(
    (s) => [s.increaseBigCats, s.increaseSmallCats],
    shallow
  );
  return (
    <div className='box'>
      <h1>cats Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>increaseBigCats</button>
        <button onClick={increaseSmallCats}>increaseSmallCats</button>
      </div>
    </div>
  );
};
