import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './Reducers';
import Menu from './Views/Menu';
import './App.scss';

const store = createStore(rootReducer, devToolsEnhancer())

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Menu />
    </Provider>
  </div>
);

export default App;
