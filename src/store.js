export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ], 
    contacts : []
  }
}

export default function storeReducer(store, action = {}) {
  
  console.log(action)
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "set_contact":
      const {contacts} = action.payload
      return {
        ...store,
        contacts: contacts
      }
      
        
}};
