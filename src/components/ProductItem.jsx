import { useContext } from "react"
import { BasketContext } from "./BasketContext"
import { ProductContext } from "./ProductContext"

export const ProductItem = ({ photo, title, price, id }) => {
    const { dispatch } = useContext(ProductContext)

    return <div>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}$</strong></p>
        <button onClick={() => dispatch({ type: "MOVE", payload: id })}>Move</button>
    </div>

}