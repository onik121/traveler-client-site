
const Cart = ({ touristsSpot }) => {

    // console.log(touristsSpot.image)

    const { image, seasonality, average_cost, travel_time } = touristsSpot;

    return (
        <div className="bg-white touristsSpot-cart rounded-3xl overflow-hidden">
            <img className="h-[300px] w-full" src={image}></img>
            <div className="p-5">
                <div className="flex justify-between">
                    <p>{average_cost}</p>
                    <p className="capitalize">{travel_time}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;