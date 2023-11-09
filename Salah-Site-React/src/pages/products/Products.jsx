import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios'

function Products() {
    const products = useLoaderData()
    console.log(products);
  return (
      <div className="products">
          <h3>List of Products</h3>
          {
              products.map(product => (
                  <Link to={`${product.id}`} key={product.id}>
                      <p>{product.title}</p>
                      <p>{product.description}</p>
                  </Link>
              ))
          }
    </div>
  )
}

export const productsLoader = async () => { 
    const res = await axios('/api/products');
    console.log(res)
    return res.data;
 }

export default Products