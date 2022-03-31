export interface Member {
    id: number;
    name: string;
    email: string;
    password?: string;
    montlhyPayment: number;
    lastPaymentDate: Date | string;
    inclusionDate: Date | string;
}