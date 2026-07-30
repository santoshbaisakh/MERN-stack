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
import AccessingDomEle from './react_hooks/useRef/AccessingDomEle';
import StoreValue from './react_hooks/useRef/StoreValue';
import PreviousCount from './react_hooks/useRef/PreviousCount';
import RenderComponent from './react_hooks/useRef/RenderComponent';
import Timer from './react_hooks/useRef/Timer';
import WidthDisplay from './react_hooks/useRef/WidthDisplay';
import BasicCalc from './react_hooks/useMemo/BasicCalc';
import HeavyCalc from './react_hooks/useMemo/HeavyCalc';
import FIlteringListEfficiently from './react_hooks/useMemo/FIlteringListEfficiently';
import Counter from './react_hooks/useCallback/Counter';
import PreventChildReRender from './react_hooks/useCallback/PreventChildReRender';
import VirtualDom from './VirtualDom';
import AxiosExample from './AxiosExample';

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
      <AccessingDomEle />
      <StoreValue />
      <PreviousCount />
      <RenderComponent />
      <Timer />
      <WidthDisplay />
      <BasicCalc />
      <HeavyCalc/>
      <FIlteringListEfficiently />
      <Counter />
      <PreventChildReRender />
      <VirtualDom />
      <AxiosExample />
    </div>
  );
}

export default App;
