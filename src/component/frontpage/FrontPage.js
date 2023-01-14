import React, { useEffect } from 'react'
import frontpage from './frontpage.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/fetchProducts';

export default function FrontPage() {

    const products = useSelector(products => products.allProducts.products);
    console.log(products);
    const dispatch = useDispatch();

    // Api call to get all products
    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/")
            .catch(err => console.log(err));
        
        dispatch(fetchProducts(response.data));
    }

    useEffect(() => {
        getProducts();
    }, []);

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listview_small = products.map( (product) => {
        const { title, price, image, id } = product; 
        return (
                <div key ={title} className='Card_small'>
                    <img src= {image} alt = "image"></img>
                    <div className='Info_container'>
                        <p1>{title}</p1>
                        <p2>$ {price}</p2>
                    </div>
                </div>
        )
    });

    const listview = products.map((product) => {
        const { title, price, image, id } = product; 
        return (
                <div key ={id} className='Card'>
                    <img src= {image} alt = "image"></img>
                    <div className='Info_container'>
                        <p1>{title}</p1>
                        <p2>$ {price}</p2>
                    </div>
                </div>
        )
    });
  return (
      <div className={`${frontpage.container}`}>
          <div className={`${frontpage.hori_scroll}`}>
            {listview_small}
          </div>
          <div className={`${frontpage.contain}`}>
            {listview}
          </div>
    </div>
  )
}
