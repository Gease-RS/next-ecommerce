import { useCartState } from "../context/cart"

function CartItem({ name, quantity, line_total }) {
    return (
        <div>
            <p>
                <strong>{name}</strong><br/>
                Quant {" "} {quantity}<br/>
                {line_total.formatted_with_symbol}
            </p>
        </div>
    )
}

export default function CartPage() {
    const { line_items, subtotal } = useCartState()

    const isEmpty = line_items.length === 0

    if (isEmpty) return <p>Your cart is empty</p>

    return (
        <div>
            <h1>Cart</h1>

            {line_items.map(item => 
                <CartItem Key={item.id} {...item } />
            )}

            <hr />
            <p><strong>Sub total:</strong> {subtotal.formatted_with_symbol}</p>
        </div>
    )
}