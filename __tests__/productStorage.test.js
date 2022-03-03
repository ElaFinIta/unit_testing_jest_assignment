'use strict';

const ProductStorage = require('../productStorage');
const products = require('../datastorage.json');

describe('Test suite A: constructor', () => {
    // not so good of a test: we need to know inner functioning of constructor
    test('Test 1: object created with passed data', () => {
        const storage = new ProductStorage(products);
        expect(storage.productStorage).toEqual(products);
    });

    test('Test 2: missing parameter throws an exception', () => {
        expect(() => new ProductStorage()).toThrow('data storage missing');
    })
});

describe('Test suite B: getById(id) from default data', () => {
    const storage = new ProductStorage(products);
    describe('Test 1: get existing product with given id from default data', () => {
        const existingTestValues = [
            // [idNumber, expectedObject]
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
        test.each(existingTestValues)('getById(%s) return %p', (idNumber, expectedObject) => {
            expect(storage.getById(idNumber)).toEqual(expectedObject);
        });
    });

    test('Test 2: get product with id that does not exist', () => {
        expect(storage.getById(5)).toBeNull();
    });

    test('Test 3: get product with missing parameter', () => {
        expect(() => storage.getById()).toThrow('parameter missing');
    });
});

describe('Test suite C: getAllIdsByModel(value)', () => {
    const storage = new ProductStorage(products);
    describe('Test 1: get ids of an existing model with default data', () => {
        const existingTestValues = [
            // [modelValue, expectedId]
            ["Future 2025", [1]],
            ["Beast II", [2]],
            ["MaxEffect 2000", [3]]
        ]
        test.each(existingTestValues)('testing: %s return %s', (modelValue, expectedId) => {
            expect(storage.getAllIdsByModel(modelValue)).toEqual(expectedId);
        });
    });

    test('Test 2: get ids of an existing model with custom data', () => {
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
        ];
        const customeStorage = new ProductStorage(customData);
        expect(customeStorage.getAllIdsByModel("Yamalla 1000")).toEqual([10, 11]);
    });

    test('Test 3: get ids of a non existing model, return empty array', () => {
        expect(storage.getAllIdsByModel("Yamalla 7")).toEqual([]);
    });

    test("Test 4: get ids by model with no parameter throws an error 'missing parameter'", () => {
        expect(() => storage.getAllIdsByModel()).toThrow('parameter missing');
    });
});

describe('Test suite D: getAllProductTypes()', () => {
    const storage = new ProductStorage(products);
    test('Test 1: get all types from deafult data', () => {
        expect(storage.getAllProductTypes()).toEqual(["moccamaster", "vacuum cleaner", "radio"]);
    });

    test('Test 2: get all types from custom data, multiple products with same type', () => {
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
        ];
        const customeStorage = new ProductStorage(customData);
        expect(customeStorage.getAllProductTypes()).toEqual(["digital piano", "acoustic piano"]);
    });

    test('Test 3: get all types from custom data, no type found or empty type', () => {
        const customDataEmptyType = [
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
        const customStorageEmptyType = new ProductStorage(customDataEmptyType);
        expect(customStorageEmptyType .getAllProductTypes()).toEqual([]);
    });
});

describe('Test suite E: getAllProductsByType(type)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: get all product objects of given type from default data (only one product per type existing)', () => {
        expect(storage.getAllProductsByType("vacuum cleaner")). toEqual([    {
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
          }]);
    });

    test('Test 2: get all product objects of given type from custom data', () => {
        const dataMultipleProductsSameType = [
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
           ];
           const storageMultipleProductsSameType = new ProductStorage(dataMultipleProductsSameType);
           expect(storageMultipleProductsSameType.getAllProductsByType("digital piano")).toEqual([           
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
        ]);
    });

    test('Test 3: no product of given type is found', () => {
        expect(storage.getAllProductsByType("guitar")).toEqual([]);
    });

    test('Test 4: parameter type is missing, exception thrown', () => {
        expect(() => storage.getAllProductsByType()).toThrow('missing parameter');
    });
});

describe('Test suite F: hasAccessories(id)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: parameter missing, return false', () => {
        expect(storage.hasAccessories()).toBe(false);
    });

    test('Test 2: no product with given id', () => {
        expect(storage.hasAccessories(42)).toBeNull();
    });

    test('Test 3: product is found and has accessories, return `true`', () => {
        expect(storage.hasAccessories(1)).toBe(true);
    });

    test('Test 4: product is found and does not have accessories, return `false`', () => {
        expect(storage.hasAccessories(3)).toBe(false);
    });

    test('Test 5: product is found but accessories field is missing, return `false`', () => {
        const dataNoAccessoriesProperty = [
            {
                "id": 99,
                "model": "Bestest in town",
                "type": "projector",
                "price": 132,
                "extras": []
            }
        ];
        const storageMissingAccessories = new ProductStorage(dataNoAccessoriesProperty);
        expect(storageMissingAccessories .hasAccessories(99)).toBe(false);
    });
    
});

describe('Test suite G: getProductAccessories(id)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: parameter missing, throw exception', () => {
        expect(() => storage.getProductAccessories()).toThrow('missing parameter');
    });

    describe('Test 2: get product accessories from default data', () => {
        const testValues = [
            // [productId, expectedAccessoriesArray]
            [1, ["cleaning brush", "coffee cup"]],
            [2, ["bags", "filter set","delux brush set"]],
            [3, []]
        ];
        test.each(testValues)('productId %s return %p', (productId, expectedAccessoriesArray) => {
            expect(storage.getProductAccessories(productId)).toEqual(expectedAccessoriesArray);
        });
    });

    test('Test 3: get product accessories, custom data where there is no accessories property in object', () => {
        const dataNoAccessoriesProperty = [
            {
                "id": 99,
                "model": "Bestest in town",
                "type": "projector",
                "price": 132,
                "extras": []
            }
        ];
        const storageNoAccessoriesField = new ProductStorage(dataNoAccessoriesProperty);
        expect(storageNoAccessoriesField.getProductAccessories(99)).toEqual([]);
    });
});

describe('Test suite H: getPriceWithoutExtras(id)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: parameter missing, throw exception', () => {
        expect(() => storage.getPriceWithoutExtras()).toThrow('missing parameter');
    });

    test('Test 2: no product with the given id', () => {
        expect(() => storage.getPriceWithoutExtras(56)).toThrow('nothing found with given id');
    });

    describe('Test 3: price of product from default data', () => {
        const testValues = [
            // [productId, expectedPrice]
            [1, 99],
            [2, 99],
            [3, 29]
        ];
        test.each(testValues)('product %s: price without extras is %p', (productId, expectedPrice) => {
            expect(storage.getPriceWithoutExtras(productId)).toEqual(expectedPrice);
        });
    });

    test('Test 4: no price found, custom data', () => {
        const dataNoPrice =  [
                {
                "id": 101,
                "model": "Yamalla 3",
                "type": "acoustic piano",
                "accessories": ["note stand"],
                "extras": []
            },
        ];
        const storageNoPrice = new ProductStorage(dataNoPrice);
        expect(() => storageNoPrice.getPriceWithoutExtras(101)).toThrow('no price found for the product, contact customer care 333333333');
    })
});

describe('Test suite I: getTotalPrice(id)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: parameter missing, throw exception', () => {
        expect(() => storage.getTotalPrice()).toThrow('missing parameter');
    });

    test('Test 2: no product with the given id', () => {
        expect(() => storage.getTotalPrice(56)).toThrow('nothing found with given id');
    });

    describe('Test 3: total price of product with extras', () => {
        const testValues = [
            // [productId, expectedTotal]
            [1, 224],
            [2, 124],
            [3, 29]
        ];
        test.each(testValues)('product %s: total price with extras is %p', (productId, expectedTotal) => {
            expect(storage.getTotalPrice(productId)).toEqual(expectedTotal);
        });
    });
});

describe('Test suite L: getPriceOfTheExtras(id)', () => {
    const storage = new ProductStorage(products);
    test('Test 1: parameter missing, throw exception', () => {
        expect(() => storage.getPriceOfTheExtras()).toThrow('missing parameter');
    });

    test('Test 2: no product with the given id', () => {
        expect(() => storage.getPriceOfTheExtras(56)).toThrow('nothing found with given id');
    });

    describe('Test 3: total price of extras', () => {
        const testValues = [
            // [productId, expectedTotalExtra]
            [1, 125],
            [2, 25],
            [3, 0]
        ];
        test.each(testValues)('product %s: price of extras is %p', (productId, expectedTotalExtra) => {
            expect(storage.getPriceOfTheExtras(productId)).toEqual(expectedTotalExtra);
        });
    });
});