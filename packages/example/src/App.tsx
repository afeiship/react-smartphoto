import TheComponent from '@jswork/react-smartphoto';
import '@jswork/react-smartphoto/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <h1>react-smartphoto</h1>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
