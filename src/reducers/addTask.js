export default function(state = [], action){
    switch (action.type){
        case "TASK_ADD":
            var task = action.payload;
            var allTasks = [];
            if(localStorage.getItem('allTasks') == null){
                
                allTasks.push(task);
                localStorage.setItem('allTasks', JSON.stringify(allTasks));
            } else {
                allTasks = JSON.parse(localStorage.getItem('allTasks'));
                allTasks.push(task);
                localStorage.setItem('allTasks', JSON.stringify(allTasks));
            }
            break;
    }
    return state;
}