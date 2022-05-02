import logo from './logo.svg';
import styles from './App.module.css';

import BButton from '../src/elements/button/BButton';

function App() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>

        <BButton
          is="span"
          class="test try for multiple"
          color="primary"
          size="large"
          isStatic={true}>
          Button
        </BButton>
      </header>
    </div>
  );
}

export default App;
