import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import Even from './React_Assignments/Even';
import Report from './React_Assignments/Report';
import Product from './React_Assignments/Product';
import RunsEveryRender from './react_hooks/useeffect/RunsEveryRender';
import RunsOnlyOnce from './react_hooks/useeffect/RunsOnlyOnce';
import RunsDependencyChanges from './react_hooks/useeffect/RunsDependencyChanges';
import CleanUpFunction from './react_hooks/useeffect/CleanUpFunction';

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Register />
      <Even />
      <Report />
      <Product />
      <RunsEveryRender />
      <RunsOnlyOnce />
      <RunsDependencyChanges />
      <CleanUpFunction />
    </div>
  );
}

export default App;
