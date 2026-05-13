// Buy Page Script

function handleOrder(productName, price) {
  const quantity = prompt(`${productName}를 몇 개 주문하시겠습니까?`, '1');
  
  if (quantity === null) {
    return;
  }
  
  const qty = parseInt(quantity);
  if (isNaN(qty) || qty <= 0) {
    alert('올바른 수량을 입력하세요.');
    return;
  }
  
  const totalPrice = price * qty;
  const message = `${productName} ${qty}개 주문\n총 가격: ${totalPrice.toLocaleString()}원\n\n주문하시겠습니까?`;
  
  if (confirm(message)) {
    const orderDetails = `
상품: ${productName}
수량: ${qty}개
총가격: ${totalPrice.toLocaleString()}원

주문을 확인해주시기 바랍니다.
    `;
    
    // Send email with order details
    const emailSubject = encodeURIComponent(`포포 주문: ${productName}`);
    const emailBody = encodeURIComponent(orderDetails);
    
    window.location.href = `mailto:popopark@farm.com?subject=${emailSubject}&body=${emailBody}`;
    
    alert('주문 이메일이 발송됩니다. 고객센터에서 확인 후 연락을 드리겠습니다.');
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    // Close other open items
    document.querySelectorAll('.faq-item[open]').forEach(openItem => {
      if (openItem !== this) {
        openItem.open = false;
      }
    });
  });
});
