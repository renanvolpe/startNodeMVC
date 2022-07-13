type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: "Product X", price: 15},
    {title: "Product Y", price: 20},
    {title: "Product W", price: 30},
    {title: "Product R", price: 50}
]

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getPrice: (price:number): Product[] => {
        return data.filter(item=> item.price >= price);
    }
}