import Container from "../src/components/primitives/Container";

import Home from "../src/pages/Home";
import Characters from "../src/pages/Characters";
import Seasons from "../src/pages/Seasons";

import { DataProvider } from "../src/context/DataContext";
import { CharactersProvider } from "../src/context/CharactersContext";
import { SeasonsProvider } from "../src/context/SeasonsContext";

function App() {
  return (
    <DataProvider>
      <CharactersProvider>
        <SeasonsProvider>
          <Container className="App">
            <Home />
            <Characters />
            <Seasons />
          </Container>
        </SeasonsProvider>
      </CharactersProvider>
    </DataProvider>
  );
}

export default App;
