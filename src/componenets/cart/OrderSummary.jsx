
function OrderSummary({ subtotal, tax, total }) {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div>
        <span>Tax (15%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <hr />

      <div className="total">
        <strong>Total</strong>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default OrderSummary;
