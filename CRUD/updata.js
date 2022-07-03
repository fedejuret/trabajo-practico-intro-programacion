const tasks = require('./read');
const write = require('./writeJSON');

const tasksContains = (id, title , author, genre, year, cost, price) => {
    
    const updatedTasks = tasks.map(task => {

        if (task.id == id) {
            
        task.title = title;
        task.author = author;
        task.genre = genre;
        task.year = year;
        task.cost = cost;
        task.price = price;
            
        }
        
        return task;

    });

    write(updatedTasks);

    

}


module.exports = tasksContains;