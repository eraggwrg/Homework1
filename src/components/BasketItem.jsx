
export const BasketItem = ({ title, price, count, subtotal }) => {
  

    return <tr>
        <td>{title}</td>
        <td>{price}$</td>
        <td>{count}</td>
        <td>{subtotal}$</td>
        <td>
            <button >+</button>
            <button >-</button>
            <button >x</button>
        </td>
    </tr>

}