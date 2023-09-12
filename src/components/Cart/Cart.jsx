

const Cart = ({bottle,handleDelete }) => {
    const { name, price, id} = bottle;
    return (
        <div className="space-y-4">


            <div className="flex">
                {/* <li>{id}</li> */}
                <li>{name}</li>
                <p className="ml-[50px] mr-[30px]">{price}</p>
                <button className="btn btn-error mb-[5px]" onClick={()=>handleDelete(bottle)}>Delete</button>
            </div>


        </div>
    );
};

export default Cart;