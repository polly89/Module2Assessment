///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((prevVal, currVal) => {
    return prevVal + currVal.price
}, 0)

const cartTotal = summedPrice

console.log(`Your total, prior to taxes and coupons, is at ${cartTotal}`)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, discount){
    const totalTaxed = (cartTotal * .06) + cartTotal;
    const calcDiscount = (totalTaxed * discount) / 100 ;

    return totalTaxed - calcDiscount
}

console.log(`Your total amount with taxes and a coupon code amount to ${calcFinalPrice(cartTotal, 10)}`)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
My cart page should include:
- Name = string
- Delivery or pick up = boolean
- Delivery Address = string
- Phone = number
- Food item = string
- Quantity = number
- Price = number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const restaurantOrder = {
    'user1': 'Tom Jeff',
    'Delivery': true,
    'Address': '1255 First Street, St Joseph, MI 49045',
    'Phone': 4536784567,
    'Item': 'large cheese pizza',
    'quantity': 2,
    'price': 15,
}

console.log(restaurantOrder)