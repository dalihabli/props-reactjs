
import './App.css';
import User from './profile/User';

function App() {
   function getData()
   {
    alert("dalihabli, student,react")
   }
   return (
    <div className="App">
      <User data={getData}/>
    </div>
  );
}

export default App;
