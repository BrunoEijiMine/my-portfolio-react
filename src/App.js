import Header from './components/Header/header';
import Content from './components/Content/content';
import Skill from './components/Skill/skill';
import Work from './components/Work/work';
import About from './components/About/about';
import styled from 'styled-components';
import "./main.css";

const AppContainer = styled.div`
  background-color: var(--background);
  padding: 2rem;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Content />
      <About />
      <Work />
      <Skill />
    </AppContainer>
  );
}

export default App;