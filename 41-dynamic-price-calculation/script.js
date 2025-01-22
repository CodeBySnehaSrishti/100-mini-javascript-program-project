document.addEventListener('DOMContentLoaded', () => {
    const price1 = 20;
    const price2 = 15;
    const quantity1Input = document.getElementById('quantity');
    const quantity2Input = document.getElementById('quantity2');
    const total1 = document.getElementById('total');
    const total2 = document.getElementById('total2');
    const grandTotal = document.getElementById('grand-total');
    function updatePrice() {
      const quantity1 = parseInt(quantity1Input.value);
      const quantity2 = parseInt(quantity2Input.value);
      const totalPrice1 = price1 * quantity1;
      const totalPrice2 = price2 * quantity2;
      total1.innerText = totalPrice1;
      total2.innerText = totalPrice2;
      const grandTotalPrice = totalPrice1 + totalPrice2;
      grandTotal.innerText = grandTotalPrice;
    }
    quantity1Input.addEventListener('input', updatePrice);
    quantity2Input.addEventListener('input', updatePrice);
    updatePrice(); // Initialize on load
  });
  