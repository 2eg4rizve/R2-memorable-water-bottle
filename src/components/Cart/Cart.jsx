

const Cart = ({ bottle }) => {
    const { name, price } = bottle;
    return (
        <div className="space-y-4">


            <div className="flex">
                <li>{name}</li>
                <p className="ml-[50px] mr-[30px]">{price}</p>
                <button className="btn btn-error mb-[5px]">Delete</button>
            </div>


        </div>
    );
};

export default Cart;