import {useEffect,useState,useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../../../helpers/productsStore';
import DataContext from '../../../helpers/DataContext';
import ProductCard from './ProductCard';


// [{... }, {... }, {... }]

function Store() {

    const {productsList1, setProductsList1} = useContext(DataContext);



    const [searchTerm, setSearchTerm] = useState('');

    const [isLoading,setLoadingT]=useState(false);


    const filteredData = productsList1.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};


function handleFocus(event) {
  event.target.value = "";
  //setSelectedInput("");
}


    

   

    //console.log('MY STOCK DATA')
   // console.log(productsList1)
    return (


        <div class="row">

<div class="card">
       <div class="card-body p-2">
       <div class="row">
       <div class="col-xl-5 col-lg-8 col-md-8 col-sm-8">
           <div class="input-group d-flex w-100 float-start">
               <input type="text" class="form-control border-end-0 my-2" value={searchTerm} onChange={handleSearch} placeholder="Search ..."/>
               <button class="btn input-group-text bg-transparent border-start-0 text-muted my-2">
                   <i class="fe fe-search text-muted" aria-hidden="true"></i>
               </button>
           </div>
       </div>
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
         
       {/* {!isLoading &&<button type="submit" class="btn btn-primary btn-block float-end my-2"><i class="fas fa-save"></i><span> Save Changes </span></button>

} 
{isLoading &&
  <button type="submit" class="btn btn-primary btn-block float-end my-2" title="Save" disabled><div class="spinner-grow spinner-grow-sm me-2" role="status">
  <span class="visually-hidden">Loading...</span>
</div>Saving...</button>
} */}


       </div>
       <div class="col-xl-3 col-lg-12">
      
           {/* <a class="btn btn-primary btn-block float-end my-2"><i class="fa fa-plus-square me-2"></i>New Product</a> */}
       </div>
   </div>
       </div>
   </div>
        {filteredData.map((product, idx) => (
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 alert wishlist-card">

        <ProductCard product={product} searchTerm={searchTerm}/>
        </div>
        ))}

        </div>
       

         
    )
}

export default Store
