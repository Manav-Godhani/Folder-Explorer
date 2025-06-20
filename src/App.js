import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from './data/folderData';
import Folder from './components/Folder';

function App() {
  const [explorerData,setexplorerData] = useState(explorer);
  
  return (
    <div className="App">
      <center><h4>File Explorer with Dummy json data</h4></center>
      <Folder explorer={explorerData}/>
    </div>
  );
}

export default App;
