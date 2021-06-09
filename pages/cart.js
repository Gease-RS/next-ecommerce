import commerce from "../lib/commerce"
import { useCartDispatch, useCartState } from "../context/cart"

function CartItem({ id, name, quantity, line_total }) {
    const { setCart } = useCartDispatch()

    const handleUpdateCart = ({cart}) => setCart(cart)

    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart)

    const decrementQuantity = () => {
        quantity > 1
            ? commerce.cart.update(id, { quantity: quantity - 1}).then(handleUpdateCart)
            : removeItem()
    }

    const incrementQuantity = () => commerce.cart.update(id, { quantity: quantity + 1}).then(handleUpdateCart)

    return (
        <div>
            <p>
                <strong>{name}</strong><br/>
                Quant {" "} {quantity}<br/>
                {line_total.formatted_with_symbol}
            </p>
            <div>
                <button onClick={decrementQuantity}>-</button>
                <button onClick={incrementQuantity}>+</button>
                <button onClick={removeItem}>X</button>
            </div>
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