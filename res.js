console.log("Javascript is connected");
var swiggyRest =  [{ 
    res: 1,
    name: 'CHICK-fil-A',
    type: 'Fastfood',
    rating: 4.9,
    ratingCount: 2613,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: true,
    expectedTime: 30,


},
{
res: 2,
    name: 'Wendys',
    type: 'Fastfood',
    rating: 4.3,
    ratingCount: 1613,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: false,
    expectedTime: 45,


},
{
res: 3,
    name: 'Chilis',
    type: 'Fastfood',
    rating: 4.2,
    ratingCount: 3013,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: true,
    expectedTime: 25,
},

{
    res: 4,
    name: 'Dairy Queen',
    type: 'Fast food',
    rating: 4.9,
    ratingCount: 2613,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: true,
    expectedTime: 30,
},

{
    res: 5,
    name: 'Burger King',
    type: 'Fast food',
    rating: 3.9,
    ratingCount: 1313,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: false,
    expectedTime: 48,
},

{

    res: 6,
    name: 'Raisin Canes',
    type: 'Fastfood',
    rating: 4.9,
    ratingCount: 2613,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    location: 'Chicago',
    isPopular: true,
    expectedTime: 15,

},
{

    res: 7,
    name: 'Olive Garden',
    type: 'Italian',
    rating: 4.6,
    ratingCount: 1399,
    foodItems: ['Pasta', 'Pizza', 'Mozzarella Sticks', 'Crinkle cut fries', 'normal fries', 'Parmesan cheese Sticks', 'lasgna', 'salad', 'sides'],    
    location: 'Wheeling-Chicago',
    isPopular: true,
    expectedTime: 55,

},
{

    res: 8,
    name: 'Karma',
    type: 'Japanese',
    rating: 4.3,
    ratingCount: 1602,
    foodItems: ['Sushi', 'Ramen', 'Wonton', 'Fried Momos', 'Spring rolls', 'desserts', 'sides', 'sauces', 'drinks'],    
    location: 'Naperville',
    isPopular: true,
    expectedTime: 34,

},{

    res: 9,
    name: 'Buffalo Wild Wings',
    type: 'Fastfood',
    rating: 4.9,
    ratingCount: 9902,
    foodItems: ['Burgers', 'Chicken Strips', 'Nuggets', 'Crinkle cut fries', 'normal fries', 'sauces', 'milkshakes', 'burgers', 'sides'],    
    sauces: ['Asian Zing', 'Thai Curry', 'Nashville Hot', 'Bbq', 'Buffalo hot sauce', 'Mango Habenaro'],
    location: 'Chicago-Riverwalk',
    isPopular: true,
    expectedTime: 47,

},
{

    res: 10,
    name: 'Nutella Cafe',
    type: 'Dessert Place',
    rating: 4.9,
    ratingCount: 1311,
    foodItems: ['Crepes', 'Nutella Milkshake', 'Nutella Biscuits', 'Nutella Cheese cake', 'nutella hot chocolate', 'nutella jar', 'nutella bread', 'nutella coffee', 'sides'],    
    location: 'Chicago-NavyPier 30',
    isPopular: true,
    expectedTime: 35,

},


];
console.log('------------------------------------------------------');

console.log(swiggyRest);

console.log(swiggyRest[0].name);
console.log(swiggyRest[1].name);
console.log(swiggyRest[2].name);
console.log(swiggyRest[3].name);
console.log(swiggyRest[4].name);
console.log(swiggyRest[5].name);

console.log('------------------------------------------------------');
console.log(swiggyRest[0].type);
console.log(swiggyRest[1].foodItems[2]);
console.log(swiggyRest[2].isPopular);
console.log(swiggyRest[0].rating);
console.log(swiggyRest[4].ratingCount);
console.log(swiggyRest[5].expectedTime);

console.log('------------------------------------------------------');
console.log(swiggyRest[9]);
console.log(swiggyRest[8].sauces[2]);
console.log(swiggyRest[7].location);
console.log(swiggyRest[6].rating);
console.log(swiggyRest[3].ratingCount);
console.log(swiggyRest[5].expectedTime);

console.log('------------------------------------------------------');
console.log(swiggyRest[7].name);
console.log(swiggyRest[5].type);
console.log(swiggyRest[6].isPopular);
console.log(swiggyRest[9].location);
console.log(swiggyRest[2].foodItems[6]);
console.log(swiggyRest[8].expectedTime);

console.log('------------------------------------------------------');
console.log(swiggyRest[8].name);

console.log(swiggyRest[8].type);

console.log(swiggyRest[8].location);

console.log(swiggyRest[8].foodItems[1]);

console.log(swiggyRest[8].isPopular);

console.log(swiggyRest[8].rating);

console.log(swiggyRest[8].ratingCount);
console.log(swiggyRest[8].sauces[5]);
console.log(swiggyRest[8].expectedTime);