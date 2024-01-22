import TheComponent from '../../lib/src';
import '../../lib/src/style.scss';
import './App.css';

function App() {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    url: `https://randomuser.me/api/portraits/lego/${i}.jpg`,
    caption: `Image ${i}`,
    id: i,
  }));

  return (
    <>
      <h1>react-smartphoto</h1>
      <TheComponent items={items}>Click me</TheComponent>
    </>
  );
}

export default App;
