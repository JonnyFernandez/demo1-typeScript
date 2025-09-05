import {postUser, getUsers, getUserById,updateUser,deleteUser} from "../../src/controllers/user.controller";


describe('Users Controller',()=>{

    const user = postUser({ id: 7, name: "Jonny", email: "jonny@test.com", age: 25 })
    const removeUser = deleteUser(1)
    const id:number = 1;
    
    test('postUser should be a Object',()=>{
        expect( user ).toEqual({ id: expect.any(Number) , name: expect.any(String), email: expect.any(String), age: expect.any(Number) });
    });

    test('getUsers should be a Array',()=>{
        expect( getUsers() ).toBeInstanceOf(Array);
    });

    test('getUserById should return a objet',()=>{
        expect( getUserById(id) ).toEqual({ id: expect.any(Number) , name: expect.any(String), email: expect.any(String), age: expect.any(Number) })
    });
    
    test('updateUser should return a object',()=>{
        expect(updateUser(id)).toBeInstanceOf(Object)
       
    });
    test('The object user should retur user´s property',()=>{        
        expect( updateUser(id) ).toEqual({ id: expect.any(Number) , name: expect.any(String), email: expect.any(String), age: expect.any(Number) })
    });
    
    test('delete User should return a string',()=>{
        expect(removeUser).toBe("User deleted")
     
    });


})