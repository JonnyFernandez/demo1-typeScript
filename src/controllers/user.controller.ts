import { users } from "../data/db";
import { User } from "../data/db";

export const postUser = (newUser: User ): User => {
    users.push(newUser);
    return users[users.length - 1];
}


export const getUsers =()=>{
    return users
}

export const getUserById =(id:number)=>{
    return users.find(item=>item.id ===id)
}

export const updateUser =(id:number)=>{
    const aux = users.find(item=>item.id ===id)
    if(aux) return aux 
}

export const deleteUser =(id:number)=>{
    const aux = users.find(item=>item.id ===id)
    if(aux) return "User deleted" 
    
    
}
