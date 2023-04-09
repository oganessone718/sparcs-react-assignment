import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [tablebody, setTablebody] = useState([]);
  const [id, setID] = useState(0);

  const submitHandler = (event)=>{
    var import_Kor;
    event.preventDefault();
    switch(parseInt(event.target.importance.value)){
      case 0:
        import_Kor = "낮음";
        break;
      case 1:
        import_Kor = "중간";
        break;
      case 2:
        import_Kor = "높음";
        break;
      default:
        break;
    }
    setTodo(
      {name: event.target.name.value,
      importance: import_Kor,
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
    setTodos(todos.filter((todo)=> (todo.todo.id!=id)));
  }

  function filterTable(importance){
    console.log(importance);
    if(importance==="전체"){
      setTablebody(todos.map(
        (todo)=>{
          return(
            <tr>
              <td>{todo.todo.name}</td>
              <td>{todo.todo.importance}</td>
              <td>{todo.todo.due}</td>
              <td>{todo.todo.content}</td>
                <td>
                <button onClick={()=>{removeTable(todo.todo.id)}}>
                  ❌ 
                </button>  
              </td>  
            </tr>  
          );
        }
      ))
    }
    else{
      setTablebody(todos.map(
      (todo)=>{
        if(todo.todo.importance===importance){
          return(
            <tr>
              <td>{todo.todo.name}</td>
              <td>{todo.todo.importance}</td>
              <td>{todo.todo.due}</td>
              <td>{todo.todo.content}</td>
                <td>
                <button onClick={()=>{removeTable(todo.todo.id)}}>
                  ❌ 
                </button>  
              </td>  
            </tr>  
          );
        }
      }
    ))
    }

  }

  useEffect(()=>{
    setTablebody(todos.map(
      (todo)=>{
        console.log(todo.todo);
        return(
          <tr>
            <td>{todo.todo.name}</td>
            <td>{todo.todo.importance}</td>
            <td>{todo.todo.due}</td>
            <td>{todo.todo.content}</td>
              <td>
              <button onClick={()=>{removeTable(todo.todo.id)}}>
                ❌ 
              </button>  
            </td>  
          </tr>  
        );
      }
    ));
  },[todos]);

  return (
    <>
      <h1 id="title">To-do list</h1>
      <hr className="separate"></hr>
      <section >
        <h2 id="todoAddTitle">새로운 할 일</h2>
        <form id="todoAddContent" onSubmit={submitHandler}>
          <section className="name">
            <label for= "name">종류: </label>
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
      <section>
        <p id="filtering">중요도 필터링 </p>
        <button className='filter' onClick={()=>{filterTable("전체")}}>전체</button>
        <button className='filter' onClick={()=>{filterTable("높음")}}>높음</button>
        <button className='filter' onClick={()=>{filterTable("중간")}}>중간</button>
        <button className='filter' onClick={()=>{filterTable("낮음")}}>낮음</button>
      </section>
      <table border="1" className="todoTable">
        <thead>
          <tr className="todoTableHead">
            <th scope="col">종류</th>
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
