import './App.css';
import { Bloodbanks } from './components/Bloodbanks';
import { Search } from './components/Search';
import BloodbankState from './context/BloodbankState';

function App() {
  return (
    <BloodbankState>
      <div className="App">
        <Search />
        <div className='container'>
          <Bloodbanks />
        </div>
      </div>
    </BloodbankState>
  );
}

export default App;
