import { useContext } from "react"
import { ProductItem } from "./ProductItem"
import { ProductContext } from "./ProductContext"
export const ProductList = () => {
    const { state: { items } } = useContext(ProductContext)
    return <div>
        <h3>ProductList</h3>
        <div className="list">
            {
                items.map(elm => <ProductItem key={elm.id} {...elm}  />)
            }
        </div>
    </div>

}