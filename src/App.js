

import Header from './Component/Header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import Test from './Component/Test/Test';
import { store } from '../src/reduxtoolkit/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
      <Provider store={store}>
      <Header />
      <Test />
      </Provider>
    </>


  );
}

export default App;
