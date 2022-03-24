export interface Member {
    id: number;
    name: string;
    montlhyPayment: number;
    lastPaymentDate: Date | string;
    inclusionDate: Date | string;
}