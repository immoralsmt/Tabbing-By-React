import logo from './logo.svg';
import './App.css';
import {tabs} from './tab';
import { useState } from 'react';
function App() {
  let [activeTab, setActiveTab] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);

  const changeData = (i) => {
    setActiveTab(i);
    setActiveContent(tabs[i]);
  };

  return (
    <div className='tabouter'>
      <h1 className='tabtitle'>Your Knowledge Shortcut Tabs</h1>
      <ul>
        {tabs.map((items,i) => {
          return (
          <li key={i}>
            <button onClick={()=>changeData(i)} className={activeTab === i ? 'active' : ''}>{items.title}</button>

          </li>
        );
      })}
      </ul>
      {activeContent.content!==undefined ? 
      <p>
        {activeContent.content}
      </p> : null}
    </div>
  );
}

export default App;
