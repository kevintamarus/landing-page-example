import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans', 'san-serif']
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
