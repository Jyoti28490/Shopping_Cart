import React from 'react';
import './App.css';
// import Stopwatch from './Stopwatch';
import CartPage from './Pages/CartPage/CartPage';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

// import useLocalStorage from './components/HelperFunctions/useLocalStorage';

function App() {
  // const [text, setText] = useLocalStorage('name1', '');

  // const inputRef = useRef();

  // const [selected, setSelected] = useState('');
  // const inputRef = useRef('');

  // const countries = [
  //   { id: 1, name: 'India' },
  //   { id: 2, name: 'Germany' },
  //   { id: 3, name: 'Switzerland' },
  //   { id: 4, name: 'Rome' },
  // ];

  // const handleSelected = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   setSelected(e.target.value);
  //   inputRef.current.focus();
  // };

  // const countRef = useRef(0);

  // const handle = () => {
  //   countRef.current++;
  //   console.log(`Clicked ${countRef.current} times`);
  // };
  // console.log('I rendered!');

  // console.log(countries[0].name);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* <Stopwatch /> */}
      {/* <form> */}
      {/* <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="password" /> */}
      {/* <button onClick={handle}>Click me</button> */}
      {/* <input
        type="text"
        name="username"
        placeholder="username"
        value={selected}
        ref={inputRef}
      />
      <select value={selected} onChange={handleSelected}>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select> */}
      {/* <input type="submit" value="Submit" className="submit" /> */}
      {/* </form> */}
    </>
  );
}

export default App;
