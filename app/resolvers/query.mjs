

export const Query={
        hello: (_, { name }) => `Hello ${ name || 'world'}`,
        getTodos: (parent,args,{db},info) => { 
            return db.todos 
        },
        getTodoById:(parent,{id},{db},info)=>{
            try {
                const todo = db.todos.find(todo => todo.id == id);
                if (!todo) {
                  throw new Error(`No todo found with ID ${id}`);
                }
                return todo;
             } catch (err) {
                throw new Error(`An error occurred: ${err.message}`);
             }
        },
        getUsers:(parent,args,{db},info)=>{
            return db.users
        },
        getUserById:(parent,{id},{db},info)=>{
            return db.users.find(users=> users.id == id )
        },
        
    }
