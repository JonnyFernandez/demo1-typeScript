import { postUser, getUsers, getUserById, updateUser, deleteUser } from "./controllers/user.controller";
import {getCharacter,getCharacterById} from './controllers/char.controller'

(async () => {
  const list = await getCharacter();
  console.log("Lista de Pokémon:", list);

})();


const result: Promise<object> = getCharacterById(25);

result.then(name => {
  console.log(name); // "pikachu" (string)
});



// const user = { id: 7, name: "Jonny", email: "jonny@test.com", age: 25 }
// console.log(postUser(user));
// console.log(getUsers());
// console.log(getUserById(1));
// console.log(updateUser(1));
// console.log(deleteUser(1));
