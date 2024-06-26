import { BearBox } from './components/BearBox';
import { Boxies } from './components/Boxies';
import { CatsBox } from './components/CatsBox';
import CatsBox2 from './components/CatsBox2';
import { FoodBox } from './components/FoodBox';
import { CatsController } from './components/catsController';
import { SubMenu } from './subMenu/App';
function App() {
  return (
    <div className='container'>
      <div>
        {/* <SubMenu />
        <CatsBox />
        <BearBox /> */}
        <FoodBox />
        <Boxies />
      </div>
      {/* <div>
        <CatsBox />
        <CatsBox2 />
        <CatsController />
      </div> */}
    </div>
  );
}

export default App;
