import Browser from './route/Browser';
import Home from './route/Home';
import Layout from './route/Layout';
import Signup from './route/Signup';
import Subscription from './route/Subscription';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/browser" element={<Browser/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/subscription" element={<Subscription/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
