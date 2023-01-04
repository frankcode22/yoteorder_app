
import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../../../helpers/productsStore';
import ProductCard from './ProductCard';
// [{... }, {... }, {... }]

function Store() {
    return (


        <div class="row">
        {productsArray.map((product, idx) => (
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 alert wishlist-card">

        <ProductCard product={product}/>
        </div>
        ))}

        </div>
       

         
    )
}

export default Store
