import React, { useState, useContext, useEffect } from 'react';
import StarWarsPlanetsSearchContext from '../context/AppContext';

function Table() {
  const { data, setData, dataActual, setDataActual, filterByName,
    filterByNumericValues, sortList } = useContext(StarWarsPlanetsSearchContext);

  const [titles, setTitles] = useState(false);

  const getPlanets = async () => {
    const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((resolve) => resolve.json());
    // Link onde aprendi a ordenar array via string: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20ordenar%20esse%20array%20em,para%20o%20m%C3%A9todo%20sort()%20.
    const orderedPlanets = results.sort((a, b) => {
      const foward = 1;
      const back = -1;
      const stay = 0;
      if (a.name > b.name) return foward;
      if (a.name < b.name) return back;
      return stay;
    });
    setData(orderedPlanets);
    setDataActual(orderedPlanets);
    setTitles(Object.keys(orderedPlanets[0]));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getPlanets(); }, []);

  const changeData = () => {
    let newData = [];
    newData = newData.concat(data);
    if (sortList) {
      const { sortByBtn, sortByOptions } = sortList;
      switch (sortByBtn) {
      case 'Ascendente':
        newData = newData.sort((a, b) => a[sortByOptions] - b[sortByOptions]);
        break;
      case 'Descendente':
        newData = newData.sort((a, b) => b[sortByOptions] - a[sortByOptions]);
        break;
      default:
        console.log('Configuração de ordenação desabilitada');
      }
    }
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        switch (comparison) {
        case 'maior que':
          newData = newData.filter((planet) => Number(planet[column]) > (value));
          break;
        case 'menor que':
          newData = newData.filter((planet) => Number(planet[column]) < (value));
          break;
        case 'igual a':
          newData = newData.filter((planet) => Number(planet[column]) === (value));
          break;
        default:
          console.log('Configuração de filtro desabilitada');
        }
      });
      setDataActual(newData);
    }
    setDataActual(newData);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { changeData(); }, [filterByNumericValues, sortList]);

  return (
    <table className='table-container'>
      <tbody className='table-container2'>
        <tr className='title-table'>
          {titles && titles.filter((title) => title !== 'residents')
            .map((title) => <th key={ title } className='title-table-item'>{title}</th>)}
        </tr>
          {dataActual && dataActual.filter((planet) => planet.name.includes(filterByName))
            .map((planet) => (
              <tr key={ planet.name } className='line-table-item'>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))
          }
      </tbody>
    </table>
  );
}

export default Table;
