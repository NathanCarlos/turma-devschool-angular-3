export interface Task {
    id: number,
    description: string,
    completed: boolean,
    inclusionDate: Date | string;
};