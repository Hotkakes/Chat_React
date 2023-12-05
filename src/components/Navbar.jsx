import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, logout } = useLogin();
  const cart = useSelector(state => state.cart) 
    const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    setTotal(
        cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)
    )
}, [cart])

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  }
  
  const Buscar=()=>{
    const boardId = event.target.value;
        console.log(boardId)
        navigate(`/detalle/${boardId}`, {
          state: {
            title: boardId,
            image: 'https://st.depositphotos.com/1004996/3813/v/450/depositphotos_38137947-stock-illustration-maintenance-icon-with-hand-wrench.jpg',
            price: 'Precio no encontrado'
          }
        });
  }

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">WOLF Store</h1>
        <Link to="/cart">Carrito ${total}</Link>
        <Link to="">
          <div className="Buscador">
            <span>Search</span>
            <input type="text" id="search" placeholder="¿Que necesitas?" onChangeCapture={Buscar}></input>
          </div>
        </Link>
        
        {!user ? <Link to="/login">Iniciar sesión</Link> : 
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>
            <button className="text-red-500 underline p-2 rounded-md hover:text-red-600" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        
        }
      </div>
    </nav>
  );
};

export default Navbar;
