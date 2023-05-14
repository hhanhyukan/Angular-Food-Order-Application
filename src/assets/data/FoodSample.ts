const sample_foods = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch']
    },
    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger']
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry']
    },
    {
        id: '5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup']
    },
    {
        id: '6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
    }
];

const sample_tags = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 }
];

const sample_order = [
    {
        orderId: 'axd12z',
        user: 'chos Phat',
        totalPrice: 12,
        address: 'axd',
        orderTime: '15',
        status: 'Rejected',
        userNote: 'axdz'
    },
    {
        orderId: 'dsa13x',
        user: 'dm Thinh',
        totalPrice: 25,
        address: 'dsa',
        orderTime: '25',
        status: 'Confirmed',
        userNote: 'dasx'
    },
    {
        orderId: 'axd14y',
        user: 'hl Shidoru',
        totalPrice: 20,
        address: 'axd',
        orderTime: '35',
        status: 'Pending',
        userNote: 'axdy'
    }
];
