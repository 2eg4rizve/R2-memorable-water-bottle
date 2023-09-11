

const Cart = ({bottle}) => {
    const {name,price}=bottle;
    return (
        <div className="flex ">

            <li>{name}</li>
            <p className="ml-[50px]">{price}</p>
            
        </div>
    );
};

export default Cart;