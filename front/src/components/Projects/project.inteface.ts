export interface Project{
    name: string;
    color: string;
    tasks: Task[];
}

export interface Task{
    name: string;
    workload: number;
    deadline: string;
}
