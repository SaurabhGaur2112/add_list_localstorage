export const taskAdd = (task) => {
    return {
        type: 'TASK_ADD',
        payload: task
    }
}