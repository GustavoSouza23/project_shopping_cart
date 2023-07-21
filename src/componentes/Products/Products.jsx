import React, { useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductsCard/ProductsCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);


  useEffect(() => {

    fetchProducts('smartphone').then((response) => {

      setProducts(response);
      setLoading(false);
    });

  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )

  );
};
export default Products;
