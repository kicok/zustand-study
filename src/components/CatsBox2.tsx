import { useICatStore } from '../stores/catStore';

const CatsBox2 = () => {
  const bigCats = useICatStore((s) => s.cats.bigCats);
  // const bigCats = useICatStore.use.cats().bigCats; // x

  return (
    <div className='box'>
      <h1>Parital States from castStore</h1>
      <p>big cats : {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
};

export default CatsBox2;
