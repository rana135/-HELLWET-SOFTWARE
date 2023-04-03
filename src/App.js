import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Component/routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <div>
      {loading ? <div className='loader'>
        <FadeLoader
          color={"#03cafc"}
          loading={loading}
          size={100}
        />
      </div> :
        <div>
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer></ToastContainer>
        </div>}
    </div>
  );
}

export default App;
