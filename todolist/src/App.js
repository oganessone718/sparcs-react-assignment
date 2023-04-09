import React, {useState, useEffect} from 'react';
import './App.css';
import Todolist from './Todolist';

const App = () => {

  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [tablebody, setTablebody] = useState([]);
  const [id, setID] = useState(0);

  const submitHandler = (event)=>{
    event.preventDefault();
    setTodo(
      {name: event.target.name.value,
      importance: event.target.importance.value,
      due: event.target.due.value,
      content: event.target.content.value,
      id: id,
      }
    );
    setID(id+1);
  }

  useEffect(()=>{
    if(todo){
      setTodos([{todo}, ...todos]);
    }
  },[todo]);

  function removeTable(id){
    setTodos(todos.filter((todo)=> (todo.id!=id)));
  }

  useEffect(()=>{
    setTablebody(todos.map(
      (todo)=>{
        console.log(todo);
        console.log(todo.name);
        return(
          <tr>
            <td>{todo.name}</td>
            <td>{todo.importance}</td>
            <td>{todo.due}</td>
            <td>{todo.content}</td>
              <td>
              <button onClick={()=>{removeTable(todo.id)}}>
                ❌ 
              </button>  
            </td>  
          </tr>  
        );

      }
    ));
  },[todos]);

  // function showTable(todo){
  //   return(
  //     <tr>
  //       <td>{todo.name}</td>
  //       <td>{todo.importance}</td>
  //       <td>{todo.due}</td>
  //       <td>{todo.content}</td>
  //       <td>
  //         <button onClick={()=>{removeTable(todo.id)}}>
  //           ❌
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // }



  return (
    <>
      <h1 id="title">To-do list</h1>
      <hr className="separate"></hr>
      <section >
        <h2 id="todoAddTitle">새로운 할 일</h2>
        <form id="todoAddContent" onSubmit={submitHandler}>
          <section className="name">
            <label for= "name">제목: </label>
            <input type="text" name="name" id="name" required></input>
          </section>
          <section className="importance">
            <label for= "importance">중요도: </label>
            <input type="range" name="importance" id="importance" min="0" max = "2" required></input>
          </section>
          <section className="due">
            <label for= "due">마감일: </label>
            <input type="date" name="due" id="due" required></input>
          </section>
          <section className="content">
            <label for= "content">내용: </label>
            <textarea name="content" id="content" rows="3" cols="20" required></textarea>
          </section>
          <input type="submit" value="추가"></input>
        </form>
      </section>
      <hr className="separate"></hr>
      <table border="1" className="todoTable">
        <thead>
          <tr className="todoTableHead">
            <th scope="col">이름</th>
            <th scope="col">중요도</th>
            <th scope="col">기한</th>
            <th scope="col">내용</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          {tablebody}
        </tbody>
          
      </table>
    </>

  );
};

export default App;
