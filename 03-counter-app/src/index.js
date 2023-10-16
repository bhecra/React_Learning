import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';
import { defineCustomElements } from '@bhecra/components/loader';

import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value={100} />, divRoot);

defineCustomElements(window);
