
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((a, b) => a.concat(b), []);
}


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}



function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}


interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
  
    let expensiveProduct = products[0];
  
    for (const product of products) {
      if (product.price > expensiveProduct.price) {
        expensiveProduct = product;
      }
    }
  
    return expensiveProduct;
}


  