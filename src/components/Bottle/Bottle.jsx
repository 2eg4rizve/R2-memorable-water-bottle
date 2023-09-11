

const Bottle = ({ bottle,addToCart }) => {
    const { name, img, price } = bottle;
    return (
        <div>
            {/* <div className="w-[200px] h-[300px] bg-blue-400">
                <h1>Bottle Name : {name}</h1>
                <img src={img} alt="" srcset="" />
                <h1>Bottle price : {price}</h1>

            </div> */}

            <div className="card h-[100%] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w">
                    <img  src={img}alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h1>Bottle price : {price}</h1>
                    <div className="card-actions">

                        <button onClick={() => addToCart(bottle)} className="btn 
                        
                        btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Bottle;