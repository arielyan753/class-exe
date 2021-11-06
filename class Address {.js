
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
class Address extends Person {
    constructor(firstName, lastName, city, street, num) {
        super(firstName, lastName)
        this.city = city;
        this.street = street;
        this.num = num;
    }
    getFullAddress() {
        return `${this.city} ${this.street} ${this.num}`
    }
}

class Costumer extends Address {
    constructor(firstName, lastName, city, street, num) {
        super(firstName, lastName, city, street, num)
    }
    costumerDetails() {
        return `${this.getFullName()} ${this.getFullAddress()}`
    }
}

class Item {
    constructor(itemId, itemName, ItemPrice) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.ItemPrice = ItemPrice;
    }
}

class Order extends Costumer {
    constructor(orderId, firstName, lastName, city, street, num) {
        super(firstName, lastName, city, street, num)
        this.orderId = orderId
        this.items = []
    }
    addItemToOrder(itemId, itemName, ItemPrice) {
        const item = new Item(itemId, itemName, ItemPrice)
        this.items.push(item)
        return this.items
    }
    getTotalPrice() {
        const totalPrice = this.items.reduce(function (totalPrice, item) {
            const itemPrice = item.itemPrice;
            const newTotalPrice = totalPrice + itemPrice;
            return newTotalPrice;
        }, 0); 
        return totalPrice;
    }
}

const costumer1 = new Costumer('ariel', 'yan', 'tel aviv', 'dsahoifn', 343)
console.log(costumer1.costumerDetails())
const order1 = new Order(1, costumer1)
order1.addItemToOrder(1, 'ball', 12)
order1.addItemToOrder(2, 'desk', 20)
console.log(order1.getTotalPrice())





