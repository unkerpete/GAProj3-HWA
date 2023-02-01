import './App.css';

function App() {
  return (
    <div className=''>
      <NavBar />

      <Routes>
        <Route path='/' element={<Navigate replace to='/Home' />} />
        <Route path='/page-one' element={<PageOne />} />
        <Route path='/page-one/:item' element={<Details />} />
        <Route path='/page-two/' element={<PageTwo />} />
        <Route path='/page-three/' element={<PageThree />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
