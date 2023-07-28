import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  // const [status, setStatus] = useState("false");
  // console.log(status)
  return (
    <Provider store={store}>
    <div>
      <Head setSideStatus={setStatus}/>
      <Body isStatus={status}/>
    </div>
    </Provider>
  );
}

export default App;
