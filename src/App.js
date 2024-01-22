import List from './components/list';
import Search from './components/search';
import BgImag from './assets/IMG_20240122_142820_767.jpg'


function App() {
  return (
    <div className='base-style w-100 h-100 ' style={{width:'100vw'}}>
       <img src={BgImag} 
        className="position-fixed w-100 h-100 img-fluid object-fit-fill m-0 p-0 top-0 bottom-0 left-0 right-0" 
        alt={''}
        />
        <div
          className="light-bg-cover position-fixed w-100 h-100 object-fit-fill m-0 p-0 opacity-20 top-0 bottom-0 left-0 right-0" 
        ></div>

        <div className='base-style py-lg-5 m-lg-auto mt-5 p-2' style={{width:(window.innerWidth > 850 ?'70vw' : '100vw')}}>
          <h3 className='text-center  text-lg mb-3 fw-bolder text-white'>BOOK REFRENCE</h3>
          <Search />
          <List />
        </div>
    </div>
  );
}

export default App;
