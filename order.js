// order.js

const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const coffeeType = document.getElementById('coffeeType').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    
    try {
        const response = await fetch('/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerName,
                coffeeType,
                quantity,
                price,
            }),
        });

        const data = await response.text();
        alert(data); 
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again.');
    }
});
