import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    const addToCart = bottle => {
        console.log("add to caet click")
        console.log({bottle});
        const newCarts = [...carts, bottle];
        setCarts(newCarts);
    }

    return (
        <div>

            <div>
                <p className="text-[30px] text-center font-bold text-red-600">My Bottles : {carts.length}</p>
               
                {
                    carts.map( bottle => 
                         
                        <li key={bottle.id}>{bottle.name}</li>
                    )
                }



            </div>
            <p className="text-[30px] text-center font-bold text-blue-600">Bottles</p>

            <div className="grid grid-cols-3 gap-3">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        addToCart={addToCart}

                    ></Bottle>)
                }
            </div>


        </div>
    );
};

export default Bottles;