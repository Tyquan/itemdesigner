import React, { useReducer } from 'react';

import Design from './components/Design/Design';
import ItemEditor from './components/ItemEditor/ItemEditor';
// import LayersEditor from './components/LayersEditor/LayersEditor';
// import LayersList from './components/LayersList/LayersList';
// import Order from './components/Order/Order';

import ItemReducer from './reducers/ItemReducer';
import ItemContext from './context/ItemContext';

import "./style.css";


function App ()
{
  const [item, dispatch] = useReducer(ItemReducer, ItemContext);

  return (
    <ItemContext.Provider value={{item, dispatch}}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <ItemEditor />
          </div>
          <div className='col-md-8'>
            <Design />
          </div>
          <div className='col-md-2'>
          </div>
        </div>
        <br />
      </div>
    </ItemContext.Provider>
  );
}

export default App;


/*

function App ()
{
  const [item, dispatch] = useReducer(ItemReducer, ItemContext);

  return (
    <ItemContext.Provider value={{item, dispatch}}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <ItemEditor />
            <br />
            <LayersEditor />
          </div>
          <div className='col-md-8'>
            <Design />
          </div>
          <div className='col-md-2'>
            <LayersList />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-12'>
            <Order />
          </div>
        </div>
      </div>
    </ItemContext.Provider>
  );
}

export default App;

*/