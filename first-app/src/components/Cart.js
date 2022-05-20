import './styles/Cart.css'

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bunchPrice = 15;

    return (
        <div className="lmj-cart">
            <h2> Panier </h2>
            <ul>
                <li>
                    Monstera : {monsteraPrice} €
                </li>
                <li>
                    Lierre : {lierrePrice} €
                </li>
                <li>
                    Bouquet de fleurs : {bunchPrice} €
                </li>
            </ul>
            <p> Total : {monsteraPrice + lierrePrice + bunchPrice } € </p>
        </div>
    )
}

export default Cart; 