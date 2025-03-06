type ID = string;

// товар
type Product = {
    id: ID;                 // идентефикатор
    name: string;          // название
    description: string;    // описание
    img: string;          // ссылка на изображение
    category: string;       // категория
    price: number | null;   // цена
}

// список товаров
type ProductList = {
    total: number;             // количество товаров в списке
    items: Product[]           // товары
}

// заказ
type Order = {
    payment: string;            // тип оплаты
    address: string;            // адрес доставки
    phone: string;              // номер телефона пользователя
    email: string;              // email пользователя
    amount: number;              // сумма заказа
    items: ID[];                // идентификаторы товаров
}

// ответ на заказ
type OrderResponse = {
    id: ID;                     // идентификатор
    amount: number;              // сумма
}