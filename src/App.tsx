import { BrowserRouter } from 'react-router-dom';
import "@google/model-viewer";

import {Routes} from 'routes';

import 'styles/global.module.scss'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* <Item /> */}
    </div>
  );
}

export default App;
