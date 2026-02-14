// Define valid coupons and their discounts
const coupons = {
    "DISCOUNT10": 10,
    "SAVE20": 20,
    "OFFER30": 30,
  };
  const totalPriceElement = document.getElementById("total-price");
  const finalPriceElement = document.getElementById("final-price");
  const messageElement = document.getElementById("message");
  const applyButton = document.getElementById("apply-coupon");
  applyButton.addEventListener("click", () => {
    const couponCode = document.getElementById("coupon-code").value.trim();
    const totalPrice = parseFloat(totalPriceElement.textContent);
    if (couponCode in coupons) {
      const discount = coupons[couponCode];
      const discountedPrice = totalPrice - (totalPrice * discount) / 100;
      finalPriceElement.textContent = discountedPrice.toFixed(2);
      messageElement.textContent = `Coupon applied! You saved ${discount}%!`;
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Invalid coupon code. Please try again.";
      messageElement.style.color = "red";
      finalPriceElement.textContent = totalPrice.toFixed(2);
    }
  });
  