import axios from "axios";
import React,{ useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../Redux/actions/productsActions";

const ProductDetails =()=>{
    const { productId }=useParams();
    let product = useSelector((state) => state.product);
    const {title,image,price,category,description}=product;
    const dispatch = useDispatch();

    
    const fetchProductDetail=async (id)=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("Err:",err);
        });
        dispatch(selectedProduct(response.data))
        console.log(response.data);
    }
    useEffect(()=>{
        if (productId && productId !== "") fetchProductDetail(productId);
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId])
       
      
    return(
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (<div className="ui centered inline loader"></div>):
        (<div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
            <div className="column lp">
            <img src={image}  className="ui fluid image" />
            </div>
            <div className="column rp">
                <h1>{title}</h1>
                <h2>
                    <a className="ui teal tag header">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content"><i className="shop icon"></i></div>
                    <div className="visible content">Add to Cart</div>
                </div>
            </div>
            </div>
            </div>
        </div>)
        
    }
    </div>
    )
}

export default ProductDetails;




// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { removeSelectedProduct, selectedProduct } from "../Redux/actions/productsActions";

// const ProductDetails = () => {
//     const { productId } = useParams();
//     const product = useSelector((state) => state.product);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchProductDetail = async (id) => {
//             try {
//                 const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//                 dispatch(selectedProduct(response.data));
//             } catch (error) {
//                 console.log("Error:", error);
//             }
//         };

//         if (productId && productId !== "") {
//             fetchProductDetail(productId);
//         }

//         return () => {
//             dispatch(removeSelectedProduct());
//         };
//     }, [productId, dispatch]);

//     // Check if product is defined before accessing its properties
//     if (!product || Object.keys(product).length === 0) {
//         console.log("no product")
//     }

//     const { title, image, price, category, description } = product;

//     return (
//         <div className="ui grid container">
//             <div className="ui placeholder segment">
//                 <div className="ui two column stackable center aligned grid">
//                     <div className="ui vertical divider">AND</div>
//                     <div className="middle aligned row">
//                         <div className="column lp">
//                             <img src={image} className="ui fluid image" alt={title} />
//                         </div>
//                         <div className="column rp">
//                             <h1>{title}</h1>
//                             <h2>
//                                 <a className="ui teal tag header">${price}</a>
//                             </h2>
//                             <h3 className="ui brown block header">{category}</h3>
//                             <p>{description}</p>
//                             <div className="ui vertical animated button" tabIndex="0">
//                                 <div className="hidden content"><i className="shop icon"></i></div>
//                                 <div className="visible content">Add to Cart</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;
