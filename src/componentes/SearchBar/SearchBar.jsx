
import React, { useState, useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const SearchBar = () => {

  const { setProducts, setLoading } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState('');  

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
   

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search_bar" onSubmit={handleSearch}>
     
      <input type="search"
        value={searchValue}
        placeholder="Buscar de produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button" >
        <BiSearchAlt />
      </button>
    </form>
  );
};
export default SearchBar;
