import { BrowserRouter } from 'react-router-dom';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';
// import { CounterReducerComponent } from './bases/CounterReducer';

function App() {
  return (
    <BrowserRouter>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </BrowserRouter>
  );
}

export default App;
