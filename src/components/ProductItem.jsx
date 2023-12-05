import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Producto añadido al carrito" )
    }

    // const chekDetails = () => {
    //     this.props.history.push('/detalle/' + product.id, { product: product.id });
    //     //navigate("/detalle/"+product.id, { product: product.id });
    //   }

      const chekDetails = () => {
        const boardId = product.id;
        console.log(product.title)
        navigate(`/detalle/${boardId}`, {
          state: {
            title: product.title,
            image: product.image,
            price: product.price
          }
        });
      };


      

    

    return (
    <li className="text-center" role="button">
        <div className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow hover:bg-yellow-200" onClick={chekDetails}>
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold">{product.title}</span>
        <span className="text-center font-bold text-sm">${product.price}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-2 rounded"
            onClick={handleAddToCart}
            >
            Añadir al carrito </button>
      </li>)
}


export default ProductItem;