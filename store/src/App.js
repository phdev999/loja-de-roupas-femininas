import './style.js';

import { HeaderStyle } from './style.js';
import { MainStyle } from './style.js';
import { FooterStyle } from './style.js';
import Nav from "./components/ Nav/index.js"
import Slider from "./components/Slider/index"

function App() {
  return (
    <>
      <HeaderStyle >
        <Nav />
        <Slider />
      </HeaderStyle>
      <MainStyle>

      </MainStyle>
      <FooterStyle>

      </FooterStyle>
    </>
  );
}

export default App;
