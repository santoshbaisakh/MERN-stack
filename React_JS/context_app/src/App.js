import './App.css';
// import { createContext, useContext, useState } from 'react';
// import ChildA from './Component/ChildA';
import Counter from './Counter';

// Step-1 : Create context

// const userContext = createContext();
// const ThemeContext = createContext();

//  Step-2 : Wrap all the child inside a provider

//  Step-3 : Pass the value

//  Step-4 : Consume the value in the respective place

function App() {
  // const [user,setUser] = useState({name:"web"})
  // const [theme, setTheme] = useState('light')
  return (

    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <div
    //     id='container'
    //     style={{ backgroundColor: theme === 'dark' ? 'beige' : 'black' }}
    //   >
    //     <ChildA />
    //   </div>

    // </ThemeContext.Provider>

    // <userContext.Provider value={user}>
    //   <ChildA />
    // </userContext.Provider>

    <div>
      <Counter />
    </div>
  );
}

export default App;
// export {userContext};
// export { ThemeContext };