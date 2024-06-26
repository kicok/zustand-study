import { useState } from 'react';
import { foodArrPush, foodArrPush2 } from '../stores/foodStore';
import { Box } from './Box';

export const Boxies = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const list = [
    { rowId: '1', totalCalorie: 1 },
    { rowId: '2', totalCalorie: 2 },
    { rowId: '3', totalCalorie: 3 },
    { rowId: '4', totalCalorie: 4 },
    { rowId: '5', totalCalorie: 15 },
  ];

  const changeTrigger = () => {
    setTrigger(!trigger);
  };

  return (
    <div className='box'>
      <div>
        <button onClick={changeTrigger}>trigger</button>
      </div>
      {list.map((item, i) => {
        foodArrPush(item.rowId, item.totalCalorie);
        foodArrPush2(item.totalCalorie);
        return <Box key={i} rowId={item.rowId} tg={trigger} />;
      })}
    </div>
  );
};
