import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import StudiesCardList from './components/studies/StudiesCardList';

function App() {
  
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    setShowList(!showList);
  }
  return (
    <div className="App">
      <Header 
        onToggleList={toggleList}
        onShowList={showList}
      />
      {showList && <StudiesCardList />}
    </div>
  );
}

export default App;
