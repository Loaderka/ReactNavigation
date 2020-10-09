import React, { useEffect, useState } from 'react';
import { UnorderedList } from './UnorderedList/UnorderedList';
import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from './Loading/Loading';

function getNav() {
  return fetch('/HelpTOC.json')
  .then(r => r.json())
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getNav().then(setData);
  }, []);
  
  return (
    <BrowserRouter>
      <Header/>
        {data === null 
        ? <Loading/>
        : <div className='navigation'>
          <UnorderedList
            pages={data.entities.pages}
            anchors={data.entities.anchors}
            topLevel={data.topLevelIds}
            type={'topLevel'}
          />
          </div>}
    </BrowserRouter>
  );
}

export default App;
