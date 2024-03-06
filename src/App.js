import React from 'react';
import Header from './components/Header/header';
import Content from './components/Content/content';
import Work from './components/Work/work';
import "./main.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Work />
    </React.Fragment>
  );
}

export default App;