

export const Todox ={
    user:({userId},args,{db},info)=>{

       return  db.users.find(user=>{
            if(!user.id) throw new Error(`No User found with ID ${id}`);
            if(user.id === userId ) return user
         })

    }
}