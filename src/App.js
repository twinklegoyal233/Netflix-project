import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appstore';


function App() {
  return (
    <div className="">
      <Provider store={appStore}  >

      <Body/>
      </Provider>
    </div>
  );
}

export default App;
