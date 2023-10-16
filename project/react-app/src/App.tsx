import React from 'react';
import { Navigation } from './routes/Navigation';

import { MyComponent } from '@bhecra/components-react'



const App = () => {

  // const data: IButton = {
  //   text: 'Hello',
  //   icon: '1'
  // }
  // const data2: IButton = {
  //   text: 'Button 2',
  //   icon: '1'
  // }


  return (
    <>

      {/* <BhecraButton data={data} title=' !!'></BhecraButton> */}
      <MyComponent ></MyComponent>
      {/* <BhecraIcon icon='Icon' >Hola</BhecraIcon> */}
      <Navigation></Navigation>

    </>
  );
}

export default App;
