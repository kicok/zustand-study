import { useEffect, useState } from 'react';
import { useBearStore } from '../stores/bearStore';
import { useFoodStore } from '../stores/foodStore';
import { shallow } from 'zustand/shallow';

export const BearBox = () => {
  const {
    bears,
    increasePopulation,
    removeAllBears,
    reset,
    name,

    // getOwner
  } = useBearStore();

  // const fish = useFoodStore((s) => s.fish);

  const [bgColor, setBgColor] = useState<'lightgreen' | 'lightpink' | undefined>(
    useFoodStore.getState().fish > 5 ? 'lightgreen' : 'lightpink'
  );

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   console.log(state, prevState);
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgColor('lightgreen');
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgColor('lightpink');
    //   }
    // });

    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        // if (prevFish === fish) {
        //   if (fish <= 5) {
        //     setBgColor('lightpink');
        //   } else {
        //     setBgColor('lightgreen');
        //   }
        // }
        if (prevFish <= 5 && fish > 5) {
          setBgColor('lightgreen');
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor('lightpink');
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true, // 페이지가 시작되자마자 실행여부
      }
    );

    return unsub;
  }, []);

  return (
    <div
      className='box'
      // style={{ backgroundColor: fish > 5 ? 'lightgreen' : 'lightpink' }}
      style={{ backgroundColor: bgColor }}
    >
      <h1>
        Bear Box:{bears}, {name}
      </h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bear</button>
        <button onClick={reset}>reset bear</button>
        <button onClick={useBearStore.persist.clearStorage}>clear storage</button>
      </div>
    </div>
  );
};
