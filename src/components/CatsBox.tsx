import { useICatStore } from '../stores/catStore';

export const CatsBox = () => {
  // const { smallCats, bigCats } = useICatStore((s) => s.cats);
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
    summary,
  } = useICatStore();
  // const { smallCats, bigCats } = useCatStore((s) => s.cats);
  // const { increaseBigCats, increaseSmallCats } = useCatStore();

  interface TP {
    name: string;
    intake: number;
    calorie: number;
  }

  type R = Record<string, TP>;

  const his: R = {
    '111': {
      name: '과자',
      intake: 1,
      calorie: 222,
    },
    '222': {
      name: '피자',
      intake: 1,
      calorie: 222,
    },
  };

  for (const key in his) {
    const value = his[key];
    console.log(key + ': ' + value.name);
  }

  console.log(his['111']);

  return (
    <div className='box'>
      <h1>CatsBox</h1>
      <p>big cats:{bigCats}</p>
      <p>small cats:{smallCats}</p>
      <p>{summary()}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>increaseBigCats</button>
        <button onClick={increaseSmallCats}>increaseSmallCats</button>
      </div>
    </div>
  );
};
