import { useState } from 'react';
import List from './components/list';
import Search from './components/search';


function App() {
 
  return (
    <div className='position-relative w-100 p-5 m-auto h-80' style={{height:'100vh'}}>
      <h3 className='text-center'>BOOK SOURCE</h3>
      <Search />
      <List />
    </div>
  );
}

export default App;
