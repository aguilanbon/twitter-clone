
import { GlobalProvider } from './helpers/GlobalHelperContext';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <GlobalProvider>
      <div className='min-h-screen bg-black'>
        {/* <Login /> */}
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
