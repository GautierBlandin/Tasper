import {QueueItem} from "../src/components/Queue/queue.interface";
import {Project, Task} from "../src/components/Projects/project.inteface";
import {projects} from "./projects";

function toQueueItem(projectColor: string, task: Task){
    return ({
        projectColor: projectColor,
        name: task.name,
        plannedWorkload: task.workload
    })
}

function generateQueueItem(project: Project, taskIndex: number){
    if(project.tasks[0]){
        return toQueueItem(project.color, project.tasks[taskIndex])
    } else {
        return undefined;
    }
}

export const queueItems = projects.map((project) => generateQueueItem(project, 0)).filter(item => item);
