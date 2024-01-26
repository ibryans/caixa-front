// Modelos para manipulações com Vendas (Sales)

export interface SaleInputs {
    user_id: number;
    payment_method_id: number;
    price: number;
    description: string;
}

export interface Sale {
    id: number;
    user_id: number;
    payment_method_id: number;
    description: string;
    price: number;
    created_at: Date;
}