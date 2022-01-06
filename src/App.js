import React, { useState } from 'react';
import './App.css';
import StarWarsPlanetsSearchContext from './context/AppContext';
import Header from './components/Header';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [dataActual, setDataActual] = useState(false);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [sortList, setSortList] = useState(false);

  const contextValue = {
    data,
    setData,
    dataActual,
    setDataActual,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    sortList,
    setSortList,
  };

  return (
    <StarWarsPlanetsSearchContext.Provider value={ contextValue }>
      <Header />
      <Filters />
      <Table />
    </StarWarsPlanetsSearchContext.Provider>
  );
}

export default App;
