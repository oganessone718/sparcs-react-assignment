import React, {useState, useEffect} from 'react';
import './Todolist.css';


const Todolist = ()=>{

  return (
    <>
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
      </tbody>
    </table>
    </>

  );
}

export default Todolist;