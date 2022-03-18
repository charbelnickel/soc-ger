import './App.css';
import { useEffect, useState } from 'react';
import MyApp from './Components/MyApp';
import Loading from './Components/Loading';

function App() {

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const showContent = () => {
    if (loading) return (<Loading/>)

    return <MyApp/>
  }

  return (
    <>
      {showContent()}
    </>
  );
}

export default App;
