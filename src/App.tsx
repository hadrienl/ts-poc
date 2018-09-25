import * as React from 'react';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () =>
  <div className="App">
    <Header
      title="TS POC" />
     <Main />
  </div>;

export default App;
