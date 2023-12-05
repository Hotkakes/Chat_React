import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItemCart = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteToCart = () => {
        dispatch(removeFromCart(product));
        alert("Producto removido" )
    }

    // const chekDetails = () => {
    //     this.props.history.push('/detalle/' + product.id, { product: product.id });
    //     //navigate("/detalle/"+product.id, { product: product.id });
    //   }


      
    return (
    <li className="text-center" role="button">
        <div className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow hover:bg-yellow-200">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold">{product.title}</span>
        <span className="text-center font-bold text-sm">${product.price}</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 mt-2 rounded"
            onClick={handleDeleteToCart}
            >
            Quitar producto </button>
      </li>)
}


export default ProductItemCart;