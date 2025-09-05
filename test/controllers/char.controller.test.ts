import {getCharacter, getCharacterById} from "../../src/controllers/char.controller";


describe("Character Controller", () => {
   
    test('getCharacter should return a array',()=>{
        expect(getCharacter()).resolves.toBeInstanceOf(Array);
    });
   
    test("should return a list of characters", async () => {
      const characters = await getCharacter();
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBeGreaterThan(0);
    });

    test('should return an error when user not found', async() => {
        try {
        await getCharacterById(3210054544540); // ID que no existe
        
    } catch (error) {
        expect(error).toEqual('Request failed with status code 404');
    }      
   });     
   
   test("getCharacterById should return a object",async()=>{
        const aux = await getCharacterById(1);
        expect(aux).toBeInstanceOf(Object);
    });

   test("getCharacterById should return a object with this properties",async()=>{
        const aux = await getCharacterById(1);
        expect(aux).toEqual({id: expect.any(Number), name: expect.any(String), types: expect.any(Array)});
    });   

   
});

