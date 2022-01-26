import {Project} from "../src/components/Project/project.inteface";

export const projects: Project[] = [
    {
        name: 'Digital Transformation',
        color: '#22990f',
        tasks: [
            {
                name: 'Prepare the keynote',
                workload: 4,
                deadline: '25/01/2022'
            },
            {
                name: 'Prepare review #2',
                workload: 3,
                deadline: '25/01/2022'
            },
            {
                name: 'Prepare review #1',
                workload: 3,
                deadline: '25/01/2022'
            }
        ]
    },
    {
        name: 'End of Study Project',
        color: '#1d11bf',
        tasks: [
            {
                name: 'Make a mock front-end',
                workload: 15,
                deadline: '03/02/2022'
            }
        ]
    },
    {
        name: 'Learn how to use NextJs',
        color: '#cf791d',
        tasks: [
            {
                name: 'Go through the initial tutorial',
                workload: 4,
                deadline: '29/01/2022'
            },
            {
                name: 'Read the advanced documation',
                workload: 4,
                deadline: '15/02/2022'
            }
        ]
    },
    {
        name: 'Networking',
        color: '#c42b0c',
        tasks: [
            {
                name: 'Friday LinkedIn Post',
                workload: 2,
                deadline: '28/01/2022'
            }
        ]
    },
    {
        name: 'NSA',
        color: '#550869',
        tasks: [
            {
                name: 'Install a GitLab server',
                workload: 4,
                deadline: '27/01/2022',
            },
            {
                name: 'Create an Ansible Playbook',
                workload: 2,
                deadline: '28/01/2022'
            }
        ]
    }
]
