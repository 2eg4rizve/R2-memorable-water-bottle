import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [allBottles, setAllBottles] = useState([]);
    const [carts, setCarts] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setAllBottles(data))

    }, [])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    const addToCart = bottle => {
        console.log("add to caet click")
        console.log({ bottle });
        const newCarts = [...carts, bottle];
        setCarts(newCarts);

        console.log(bottle.price);

        const newSum = sum + bottle.price;
        setSum(newSum);
    }

    const all = () => {
        
        setBottles(allBottles);
    }

    const increasingOrder = () => {
        console.log("increasing Order");

        const sortedProducts = [...bottles];
        sortedProducts.sort((a, b) => {
            return a.price - b.price
        });
        setBottles(sortedProducts);


    }

    const decreasingOrder = () => {
        const sortedProducts = [...bottles];
        sortedProducts.sort((a, b) => {
            return b.price - a.price;
        });
        setBottles(sortedProducts);
    }

    const smallerThen40 = () => {

        const result = allBottles.filter((item) => {
            if (item.price <= 40) {
                return item;
            }
        });
        setBottles(result);

    }

    const biggerThen40 = () => {

        const result = allBottles.filter((item) => {
            if (item.price >= 40) {
                return item;
            }
        })
        setBottles(result);
    }

    return (
        <div>

            <div>
                <p className="text-[30px] text-center font-bold text-red-600">My Bottles : {carts.length}</p>



                {
                    carts.map(bottle =>
                        //  <li key={bottle.id}>{bottle.name}</li>
                        < Cart
                            key={bottle.id}
                            bottle={bottle}
                        ></Cart>

                    )
                }

                <hr className="font-black" />

                <p>Sum : {sum}</p>



            </div>
            <p className="text-[30px] text-center font-bold text-blue-600">Bottles</p>

            <div className="flex gap-4 my-[30px]">

                <button onClick={all} className="btn btn-primary">ALL</button>
                <br />

                <button onClick={increasingOrder} className="btn btn-primary">Sort By Increasing Order</button>
                <br />

                <button onClick={decreasingOrder} className="btn btn-primary">Sort By Decreasing Order</button>
                <br />

                <button onClick={smallerThen40} className="btn btn-primary">Smaller Then 40$</button>
                <br />

                <button onClick={biggerThen40} className="btn btn-primary">Bigger Then 40$</button>
                <br />

            </div>


            <div className="grid grid-cols-5 gap-3">
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