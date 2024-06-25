import { useContext } from "react"
import { BasketItem } from "./BasketItem"
import { useReducer } from "react"
import { BasketContext } from './BasketContext'


export const Basket = () => {

    //const { state:basketitems } = useContext(BasketContext)
    const { state1: { basketitems } } = useContext(BasketContext)


    return <div>
        <h3>Basket </h3>
        {/* { !isSaled && <button className="sale" onClick={handleSale}>Sale</button> } */}

        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    // items.map(elm => <BasketItem key={elm.id} {...elm}
                    //     handleAdd={handleAdd}
                    //     handleUnAdd={handleUnAdd}
                    //     handleDelete={handleDelete}
                    // />)
                    //  items.map(elm => <BasketItem key={elm.id} {...elm} />)
                   basketitems.map(elm => <BasketItem key={elm.id} {...elm} />)

                }
            </tbody>

        </table>
    </div>

}