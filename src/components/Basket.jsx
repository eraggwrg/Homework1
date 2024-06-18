import { BasketItem } from "./BasketItem"
export const Basket = ({ items, handleAdd, handleUnAdd, handleDelete, handleSale, isSaled }) => {
    return <div>
        <h3>Basket </h3>
        { !isSaled && <button className="sale" onClick={handleSale}>Sale</button> }

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
                    items.map(elm => <BasketItem key={elm.id} {...elm}
                        handleAdd={handleAdd}
                        handleUnAdd={handleUnAdd}
                        handleDelete={handleDelete}
                        />)
                }
            </tbody>

        </table>
    </div>

}