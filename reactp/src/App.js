import './App.css';
// import Hello from './Components/Hello'
// import Message from './Components/Message';
import Profile from './Components/Profile';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
    <Profile name = 'osas'>
      {/* <h3>this is my name</h3> */}
    </Profile>
    <Counter/> 
    </div>
  );
}

export default App;
