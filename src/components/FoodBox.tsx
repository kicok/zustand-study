import {
  useFoodStore,
  addOneFish,
  removeOneFish,
  removeAllFish,
  changeBox,
  changeBox2,
} from '../stores/foodStore';

export const FoodBox = () => {
  // const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();

  // const fish = useFoodStore.getState().fish; // non-reactive÷
  const fish = useFoodStore((s) => s.fish);

  const foodRecord = useFoodStore((s) => s.foodRecord);
  // const addOneFish = useFoodStore.getState().addOneFish; // non-reactive

  // // const addOneFish = useFoodStore((s) => s.addOneFish);
  // const removeOneFish = useFoodStore((s) => s.removeOneFish);
  // const removeAllFish = useFoodStore((s) => s.removeAllFish);

  const addFiveFish = () => {
    useFoodStore.setState({ fish: fish + 5 });
  };

  const chagteCalorie = () => {
    changeBox('2', 1111);
  };
  const chagteCalorie2 = () => {
    changeBox2(1, 1111);
  };

  console.log('foodRecord', foodRecord);

  return (
    <div className='box'>
      <h1>FoodBox</h1>
      <p>fish:{fish}</p>
      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>

        <button onClick={addFiveFish}>add 5 fish</button>

        <button onClick={chagteCalorie}>변경</button>
        <button onClick={chagteCalorie2}>변경2</button>
      </div>
      <div></div>
    </div>
  );
};
