import { useState } from "react";
import TodoItem from "project2/components/TodoItem";
import "project2/css/TodoList.css";
import { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "context/TodoContext";

//1.선언적 함수 선언부
//function TodoList({ todo, onUpdate, onDelete }) {

//2.리터럴함수
//const f = ({a,b,c})=>{};

const TodoList = () => {
  const todo = useContext(TodoStateContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => setSearch(e.target.value);

  const getSearchResult = () => {
    if (!todo) return [];
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
