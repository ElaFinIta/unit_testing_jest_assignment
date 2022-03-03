'use strict';

module.exports = class ProductStorage {
    constructor(data) {
        if (!data) throw new Error('data storage missing');
        this.productStorage = data;
    }

    getById(id) {
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    return product;
                }
            }
            return null;
        }
        else throw new Error('parameter missing');
    }

    getAllIdsByModel(model) {
        const ids = [];
        if (model) {
            for (let product of this.productStorage) {
                if (product.model === model) {
                    ids.push(product.id);
                }
            }
            return ids;
        }
        else throw new Error('parameter missing');
    }

    getAllProductTypes() {
        const types = [];
        for (let product of this.productStorage) {
            if (product.type && !types.includes(product.type)) {
                types.push(product.type);
            }
        }
        return types;
    }

    getAllProductsByType(type) {
        const products = [];
        if (type) {
            for (let product of this.productStorage) {
                if (product.type === type) {
                    products.push(product);
                }
            }
            return products;
        }
        else throw new Error('missing parameter');
    }

    hasAccessories(id) {
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    if (product.accessories) {
                        if (product.accessories.length > 0) {
                            return true;
                        }
                    }
                    return false;
                }
            }
            return null;
        }
        return false;
    }

    getProductAccessories(id) {
        const accessories = [];
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    if (product.accessories) {
                        return product.accessories;
                    }
                    return accessories;
                }
            }
        }
        else throw new Error('missing parameter');
    }

    getPriceWithoutExtras(id) {
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    if (product.price) {
                        return product.price;
                    }
                    else throw new Error('no price found for the product, contact customer care 333333333');
                }
            }
            throw new Error('nothing found with given id');
        }
        else throw new Error('missing parameter');
    }


    getTotalPrice(id) {
        let totalPrice = 0;
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    if (product.price) {
                        totalPrice += product.price;
                    }
                    if (product.extras && product.extras.length > 0) {
                        for (let extra of product.extras) {
                            if (extra.price) {
                                totalPrice += extra.price;
                            }
                        }
                    }
                    return totalPrice;
                }
            }
            throw new Error('nothing found with given id');
        }
        else throw new Error('missing parameter');
    }

    getPriceOfTheExtras(id) {
        let totalPriceExtra = 0;
        if (id) {
            for (let product of this.productStorage) {
                if (product.id == id) {
                    if (product.extras && product.extras.length > 0) {
                        for (let extra of product.extras) {
                            if (extra.price) {
                                totalPriceExtra += extra.price;
                            }
                        }
                    }
                    return totalPriceExtra;
                }
            }
            throw new Error('nothing found with given id');
        }
        else throw new Error('missing parameter');
    }
}