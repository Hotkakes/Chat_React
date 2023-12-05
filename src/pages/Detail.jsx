import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Detail = () => {
    const dispatch = useDispatch();
    const { state } = useLocation()

    const handleAddToCart = () => {
        dispatch(addToCart(state));
        alert("Producto añadido al carrito" )
    }

  let title = state.title
  //let background = state.background 

    return (
        <li className="text-center" role="button">
            <h3 className='listaChistes'>Detalle del Producto:</h3>
        <div className="listaChistes flex flex-col gap-2 p-4 text-dark color:green items-center bg-blue colo rounded-xl shadow hover:bg-blue-200">
        <img src={state.image} className="w-20" />
        <span className="text-center color:green font-bold">{state.title}</span>
        <span className="text-center font-bold text-sm">${state.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-2 rounded"
            onClick={handleAddToCart}
            >
            Añadir al carrito </button>
        </div>
      </li>
    )
}

export default Detail;