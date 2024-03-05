import React  from 'react';
import Header from './components/Header/header';
import Content from './components/Content/content';
import "./main.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;