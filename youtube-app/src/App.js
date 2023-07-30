import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import WatchVideo from './component/WatchVideo';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './component/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<MainContainer />} />
          <Route path="/watch" element={<WatchVideo />} />
      </Route>
      </Routes>
    </Provider>
  );
}

export default App;
