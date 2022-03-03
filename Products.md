# End assignment

## Task: Create and test a ProductStorage class
Create a class for product data. Data storage is passed to the constractor as a parameter. Use the following json object as default storage

### **datastorage.json**

```json
[
  {
    "id": 1,
    "model": "Future 2025",
    "type": "moccamaster",
    "accessories": ["cleaning brush", "coffee cup"],
    "price": 99,
    "extras": [{
        "name": "coffee",
        "price": 15
      },
      {
        "name": "spoon",
        "price": 10
      },
      {
        "name": "color gold",
        "price": 100
      }
    ]
  },
  {
    "id": 2,
    "model": "Beast II",
    "type": "vacuum cleaner",
    "accessories": ["bags", "filter set","delux brush set"],
    "price": 99,
    "extras": [{
        "name": "manual",
        "price": 15
      },
      {
        "name": "warranty",
        "price": 10
      }
    ]
  },
  {
    "id": 3,
    "model": "MaxEffect 2000",
    "type": "radio",
    "accessories": [],
    "price": 29,
    "extras": []
  }
]
```

Create a class ProductStorage

## Constructor

### **constructor(jsonData)**
The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.


## Methods

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the product
  - Return: returns the product object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

### **getAllIdsByModel(value)**

Returns all ids of the products matching the value of model
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of product id where the products model matches the given value. If there is no match or parameter is missing, an empty array is returned.
  
### **getAllProductTypes()**

Returns an array of different product types. 

  - Parameters: none
  - Return: Returns an array of different product types. If no types are found, returns an empty array. The type is added to the result array only once.

### **getAllProductsByType(type)**

Returns an array of product objects of given type

  - Parameters: type of the product to be searched
  - Returns an array of product objects of given type. If no product of given type is found, returns an empty array.
  - If a parameter type is missing, an exeption **'missing parameter'** is thrown.


### **hasAccessories(id)**
  
- Parameters: id of the product
- Return: returns true if the product has accessories else returns false. If parameter id is missing false is returned
 


### **GetProductAccessories(id)**

Returns an array of product accessories. If none found, returns an empty array.

  - Parameters: id of the product 
  - Return: returns accessories as an array

### **getPriceWithoutExtras(id)**

Returns the price with out extras

  - Parameters: id of the product
  - Return: The price of the product not including the price of the extras
  - if no product with the given number is found throws an exeption `nothing found with given id`

### **getTotalPrice(id)**

Returns the total price of the product including the total price of the extras

  - Parameters: id of the product
  - Return: The price of the product including the total price of the extras
  - if no product with the given number is found throws an exeption `nothing found with given id`

### **getPriceOfTheExtras(id)**

Returns the total price of extras bundled with the product
 
  - Parameters: id of the product to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no product with the given number is found throws an exeption `nothing found with given id`



## Create a folder for the testproject
- the name of the folder should include your name
- use **datastorage.json** as a data source
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder __tests__ for tests
- edit the test script in the **package.json**

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder according to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file
 
