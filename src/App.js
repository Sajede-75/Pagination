import List from './components/list';
import Search from './components/search';


function App() {
  return (
    <div className='position-relative w-100 p-5 m-auto h-80' style={{height:'100vh'}}>
      <Search/>
      <List/>
    </div>
  );
}

export default App;
