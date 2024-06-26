import { useEffect, useState } from 'react';
import { useFoodStore } from '../stores/foodStore';

export const Box = ({
  rowId,
  tg,
}: // index,
{
  rowId: string;
  tg: boolean;
}) => {
  const obj = useFoodStore((s) => s.foodRecord);
  // const [total, setTotal] = useState<number>(obj[rowId]);
  const [total, setTotal] = useState<number>(0);

  const [trigger, setTrigger] = useState<boolean>(false);
  const fish = useFoodStore((s) => s.fish);
  const foodArr = useFoodStore((s) => s.foodArr);
  console.log('obj', obj);

  useEffect(() => {
    if (typeof obj[rowId] === 'number') {
      setTotal(obj[rowId]);
    }
  }, [obj[rowId]]);

  useEffect(() => {
    setTrigger(!trigger);

    setTotal(obj[rowId]);
  }, [fish, foodArr]);

  return (
    <div className='box'>
      {total}
      <div>변경 {obj[rowId]}</div>
      <div>{Math.random()}</div>
    </div>
  );
};
