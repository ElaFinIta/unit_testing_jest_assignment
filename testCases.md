# Test cases

## Test suite A: ***constructor(jsonData)***

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

- Test 1: object created with passed data
```js
new ProductStorage(jsonData);
```

test if the inner field of the created object has the same value as given as parameter. Parameter `jsonData` is the json array `datastorage.json`.

- Test 2: missing parameter throws an exception
```js
new ProductStorage();
```

throw an exception `'data storage missing'`


********************

## Test suite B: ***getById(id)***

Method searches the datastorage for an object with given key. Key is unique.

Parameters: id of the product

Return: returns the product object matching the id or null if there is no match

If parameter is missing, throws an exception `'parameter missing'`

- Test 1: get existing product with given id from default data

```json
const existingTestValues = [
    [1, {
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
    }],
    [2, {
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
    }],
    [3, {
      "id": 3,
      "model": "MaxEffect 2000",
      "type": "radio",
      "accessories": [],
      "price": 29,
      "extras": []
    }]
]
```

- Test 2: get product with id that does not exist
```js
storage.getById(5)
```

return `null`


- Test 3: get product with missing parameter
```js
storage.getById()
```

throws an exception `'parameter missing'`

******************

## Test suite C: ***getAllIdsByModel(value)***

Returns all ids of the products matching the value of model
  
Parameters: value of the property to be searched

Return: Returns an array of product id where the products model matches the given value. If there is no match or parameter is missing, an empty array is returned.

- Test 1: get ids of an existing model with default data

```js
getAllIdsByModel("Future 2025")
```

return 
```json
[1]
```

```js
const existingTestValues = [
    // [modelValue, expectedId]
    ["Future 2025", 1],
    ["Beast II", 2],
    ["MaxEffect 2000", 3]
]
```

- Test 2: get ids of an existing model with custom data

```js
const customData = [
 {
      "id": 10,
      "model": "Yamalla 1000",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 7777,
      "extras": [
        {
          "name": "color ebony",
          "price": 777
        }
      ]
    },
    {
      "id": 11,
      "model": "Yamalla 1000",
      "type": "acoustic piano",
      "accessories": [],
      "price": 99,
      "extras": []
    },
    {
      "id": 12,
      "model": "Yamalla 2",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 3333,
      "extras": [
        {
          "name": "color shiny",
          "price": 1000
        }
      ]
    }
]
```

```js
getAllIdsByModel("Yamalla 1000")
```

return
```json
[10, 11]
```

- Test 3: get ids of a non existing model, return empty array

```js
getAllIdsByModel("Yamalla 7")
```

return
```json
[]
```

- Test 4: get ids by model with no parameter throws an error `'parameter missing '`

```js
getAllIdsByModel()
```

throws an axception `'parameter missing '`

*********************

## Test suite D: ***getAllProductTypes()***

Parameters: none

Return: an array of different product types. If no types are found, returns an empty array. The type is added to the result array only once.

- Test 1: get all types from deafult data

```js
getAllProductTypes()
```

return 
```json
["moccamaster", "vacuum cleaner", "radio"]
```

- Test 2: get all types from custom data, multiple products with same type

```js
const customData = [
 {
      "id": 10,
      "model": "Yamalla 1000",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 7777,
      "extras": [
        {
          "name": "color ebony",
          "price": 777
        }
      ]
    },
    {
      "id": 11,
      "model": "Yamalla 1000",
      "type": "acoustic piano",
      "accessories": [],
      "price": 99,
      "extras": []
    },
    {
      "id": 12,
      "model": "Yamalla 2",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 3333,
      "extras": [
        {
          "name": "color shiny",
          "price": 1000
        }
      ]
    }
]
```

return 
```json
["digital piano", "acoustic piano"]
```

- Test 3: get all types from custom data, no type found or empty type

```js
const customData = [
 {
      "id": 10,
      "model": "Yamalla 1000",
      "type": "",
      "accessories": ["bench", "note stand"],
      "price": 7777,
      "extras": [
        {
          "name": "color ebony",
          "price": 777
        }
      ]
    },
    {
      "id": 11,
      "model": "Yamalla 1000",
      "accessories": [],
      "price": 99,
      "extras": []
    }
]
```

return 
```json
[]
```

*****************

## Test suite E: ***getAllProductsByType(type)***

Parameters: type of the product to be searched

Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

If a parameter type is missing, an exception `'missing parameter'` is thrown.

- Test 1: get all product objects of given type from default data (only one product per type existing)

```js
getAllProductsByType("vacuum cleaner")
```

return 
```json
[    {
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
    }]
```


- Test 2: get all product objects of given type from custom data
```js
const customData = [
 {
      "id": 10,
      "model": "Yamalla 1000",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 7777,
      "extras": [
        {
          "name": "color ebony",
          "price": 777
        }
      ]
    },
    {
      "id": 11,
      "model": "Yamalla 1000",
      "type": "acoustic piano",
      "accessories": [],
      "price": 99,
      "extras": []
    },
    {
      "id": 12,
      "model": "Yamalla 2",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 3333,
      "extras": [
        {
          "name": "color shiny",
          "price": 1000
        }
      ]
    }
]
```


```js
getAllProductsByType("digital piano")
```

return 
```json
[           
    {
      "id": 10,
      "model": "Yamalla 1000",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 7777,
      "extras": [
        {
          "name": "color ebony",
          "price": 777
        }
      ]
    },
    {
      "id": 12,
      "model": "Yamalla 2",
      "type": "digital piano",
      "accessories": ["bench", "note stand"],
      "price": 3333,
      "extras": [
        {
          "name": "color shiny",
          "price": 1000
        }
      ]
    }    
]
```

- Test 3: no product of given type is found
```js
getAllProductsByType("guitar")
```

return
```json
[]
```

- Test 4: parameter type is missing, exception thrown

```js
getAllProductsByType()
```

throw an exception `'missing parameter'`

*******************


## Test suite F: ***hasAccessories(id)***
  
Parameters: id of the product

Return: returns true if the product has accessories else returns false. If parameter id is missing false is returned

- Test 1: parameter missing, return false

```js
hasAccessories()
```
return `false`

- Test 2: no product with given id
```js
hasAccessories(42)
```

return `null`

- Test 3: product is found and has accessories, return `true`
```js
hasAccessories(1)
```
return `true`

- Test 4: product is found and does not have accessories, return `false`

```js
hasAccessories(3)
```

return `false`

- Test 5: product is found but accessories field is missing, return `false`

```js
const customData = [
        {
      "id": 99,
      "model": "Bestest in town",
      "type": "projector",
      "price": 132,
      "extras": []
    }
]
```

```js
hasAccessories(99)
```
return `false`

*********************


## Test suite G: ***getProductAccessories(id)***

Returns an array of product accessories. If none found, returns an empty array.

Parameters: id of the product

Return: returns accessories as an array.

- Test 1: parameter missing, throw exception
```js
getProductAccessories()
```

throw an exception `'missing parameter'`

- Test 2: get product accessories from default data

```js
const testValues = [
    // [productId, expectedAccessoriesArray]
    [1, ["cleaning brush", "coffee cup"]],
    [2, ["bags", "filter set","delux brush set"]],
    [3, []]
]
```

- Test 3: get product accessories, custom data where there is no accessories property in object

```js
const customData = [
        {
      "id": 99,
      "model": "Bestest in town",
      "type": "projector",
      "price": 132,
      "extras": []
    }
]
```

```js
getProductAccessories(99)
```
return `[]`


************


## Test suite H: ***getPriceWithoutExtras(id)***

Returns the price without extras

Parameters: id of the product

Return: The price of the product not including the price of the extras

If no product with the given number is found throws an exeption `'nothing found with given id'`

- Test 1: parameter missing, throw exception
```js
getPriceWithoutExtras()
```

throw an exception `'missing parameter'`

- Test 2: no product with the given id

```js
getPriceWithoutExtras(56)
```

throws an exeption `'nothing found with given id'`

- Test 3: price of product from default data

```js
const testValues = [
    // [productId, expectedPrice]
    [1, 99],
    [2, 99],
    [3, 29]
]
```

- Test 4: no price found, custom data

```js
const customData =  [
       {
      "id": 101,
      "model": "Yamalla 3",
      "type": "acoustic piano",
      "accessories": ["note stand"],
      "extras": [

      ]
    }
]
```
throws an exeption `'no price found for the product, contact customer care 333333333'`

****************


## Test suite I: ***getTotalPrice(id)***

Returns the total price of the product including the total price of the extras

Parameters: id of the product

Return: The price of the product including the total price of the extras

If no product with the given number is found throws an exception `nothing found with given id`

- Test 1: parameter missing, throw exception
```js
getTotalPrice()
```

throw an exception `'missing parameter'`

- Test 2: no product with the given id

```js
getTotalPrice(56)
```

throws an exeption `'nothing found with given id'`

- Test 3: total price of product with extras

```js
const testValues = [
    // [productId, expectedTotal]
    [1, 224],
    [2, 124],
    [3, 29]
]
```

*****************

## Test suite L: ***getPriceOfTheExtras(id)***

Returns the total price of extras bundled with the product.
 
Parameters: id of the product to be searched

Return: the total price of extras. If no extras is found returns 0

If no product with the given number is found throws an exeption `nothing found with given id`

- Test 1: parameter missing, throw exception
```js
getPriceOfTheExtras()
```

throw an exception `'missing parameter'`

- Test 2: no product with the given id

```js
getPriceOfTheExtras(56)
```

throws an exeption `'nothing found with given id'`

- Test 3: total price of extras

```js
const testValues = [
    // [productId, expectedTotal]
    [1, 125],
    [2, 25],
    [3, 0]
]
```

*****************