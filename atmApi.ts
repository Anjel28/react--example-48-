export type ATMResponse<T> = {
    success: boolean;
    data: T;
    error?: string;
}

export const checkBalance = async () : Promise<ATMResponse<number>> => {
    return {success: true, data: 1200};
}

export const withdraw = async (amount: number): Promise<ATMResponse<number>> => {
 return { success: true, data: 1200 - amount};
}

export const deposit = async (amount: number): Promise<ATMResponse<number>> => {
    return { success: true, data: 1200 + amount};
}