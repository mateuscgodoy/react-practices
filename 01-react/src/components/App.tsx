import '../styles/App.css';
import { CharacterCreator } from './CharacterCreator';
import { OptionsView } from './OptionsView';
import { TabDisplay } from './TabDisplay';

function App() {
  return (
    <>
      <header>
        <h1>React Exercise 01</h1>
        <p>"Practicing with State Hooks"</p>
      </header>
      <main>
        <TabDisplay
          tabs={[
            { name: 'Character Creation', component: <CharacterCreator /> },
            { name: 'All Options', component: <OptionsView /> },
            { name: 'Testing', component: <OptionsView /> },
          ]}
        />
      </main>
      <footer>
        <p>Small app developed by Mateus Colombo Godoy. </p>
        <p>Hello there 👋</p>
      </footer>
    </>
  );
}

export default App;
