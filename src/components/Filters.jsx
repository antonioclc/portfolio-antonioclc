import React, { useState, useContext, useEffect } from 'react';
import StarWarsPlanetsSearchContext from '../context/AppContext';

function Filters() {
  const { filterByNumericValues, setFilterByNumericValues,
    setSortList, setFilterByName } = useContext(StarWarsPlanetsSearchContext);

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [optionsColumnFilter, setOptionsColumnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [sortByBtn, setSortByBtn] = useState('population');
  const [sortByOptions, setSortByOptions] = useState('population');

  const changeValueOfFilter = ({ target }) => {
    if (target.name === 'column-filter') {
      return setColumnFilter(target.value);
    }
    if (target.name === 'comparison-filter') {
      return setComparisonFilter(target.value);
    }
    return setValueFilter(Number(target.value));
  };

  const getTextByFilterName = ({ target }) => {
    setFilterByName(target.value);
  };

  const getValuesByNumericFilter = () => {
    setFilterByNumericValues(filterByNumericValues.concat({ column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter }));
  };

  const deleteFilter = ({ target }) => {
    const deleteOptionFilter = filterByNumericValues.filter(
      (filter) => filter.column !== target.id,
    );
    setFilterByNumericValues(deleteOptionFilter);
  };

  useEffect(() => {
    const defaultColumnFilters = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const filtersColumnInUse = filterByNumericValues.map((filter) => filter.column);
    const newOptionsColumnFilter = defaultColumnFilters.filter(
      (optionColumn) => filtersColumnInUse.every((filter) => filter !== optionColumn),
    );
    setOptionsColumnFilter(newOptionsColumnFilter);
  }, [filterByNumericValues]);

  useEffect(() => {
    setColumnFilter(optionsColumnFilter[0]);
  }, [optionsColumnFilter]);

  const setAscOrDesc = ({ target }) => {
    setSortByBtn(target.id);
  };

  const changeValueOfSort = ({ target }) => {
    setSortByOptions(target.value);
  };

  const sendSortOptions = () => {
    setSortList({ sortByBtn, sortByOptions });
  };

  return (
    <div className="filters">
      <div className="form__group field">
          <input type="input" className="form__field" placeholder="Filtre pelo nome" name="name" id='name' onChange={ getTextByFilterName } />
          <label for="name" className="form__label">Filtre pelo nome</label>
        </div>
      <div className="filtersOptions">
        <div className="filtersOptions-1">
          <label className="custom-select" for="styledSelect1">
            <select
              data-testid="column-filter"
              name="column-filter"
              onChange={ changeValueOfFilter }
            >
              {optionsColumnFilter.map((optionColumn) => (
                <option
                  key={ optionColumn }
                >
                  {optionColumn}
                </option>
              ))}
            </select> 
          </label>
          <label className="custom-select" for="styledSelect1">
            <select
              data-testid="comparison-filter"
              name="comparison-filter"
              onChange={ changeValueOfFilter }
            >
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
          </label>
          <input
            type="number"
            data-testid="value-filter"
            onChange={ changeValueOfFilter }
            name="value-filter"
            value={ valueFilter }
            className="input-number"
          />
          <button
            data-testid="button-filter"
            type="button"
            onClick={ getValuesByNumericFilter }
            className="filtersOptions-1-item"
          >
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">Filtrar</span>
          </button>
        </div>
        <div className="filtersOptions-2">
          <label className="custom-select" for="styledSelect1">
            <select
              data-testid="column-sort"
              name="column-sort"
              onChange={ changeValueOfSort }
            >
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
          </label>
          <label htmlFor="Ascendente" className="radio">
            <input
              id="Ascendente"
              name="asc/desc"
              type="radio"
              data-testid="column-sort-input-asc"
              onChange={ setAscOrDesc }
            />
            <span>Ascendente</span>
          </label>
          <label htmlFor="Descendente" className="radio">
            <input
              id="Descendente"
              name="asc/desc"
              type="radio"
              data-testid="column-sort-input-desc"
              onChange={ setAscOrDesc }
            />
            <span>Descendente</span>
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ sendSortOptions }
          >
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">Ordenar</span>
          </button>
        </div>
        
      </div>
      <div className="filtersList">
        {filterByNumericValues.map((filter) => {
          const { column, comparison, value } = filter;
          return (
            <div key={ `${column} ${comparison} ${value}` } className='filter-in-use'>
              <p
                key={ `${column} ${comparison} ${value}` }
                className='filter-in-use-description'
              >
                {`${column} ${comparison} ${value}`}
              </p>
              <button type="button" onClick={ deleteFilter } id={ column }>
                <span class="shadow-X" onClick={ deleteFilter } id={ column }></span>
                <span class="edge-X" onClick={ deleteFilter } id={ column }></span>
                <span class="front-X" onClick={ deleteFilter } id={ column }>X</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filters;
