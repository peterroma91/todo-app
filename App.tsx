import * as React from "react";
import ToDoList from "./components/TodoList.tsx";
const App: React.FC = () => {
return (
 <div className="App">
  <React.Fragment>
    <h2>Todo App</h2>
    <ToDoList/>
  </React.Fragment>
 </div>
);
}
export default App;
