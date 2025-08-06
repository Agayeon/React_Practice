import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const analyzeTodo = () => {
    const totalCount = todo.lenght;
    const doneCount = todo.filter((it) => {
      it.isDone).length;
      const notDoneCount = totalCount - doneCount
    })
  }
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        className="searchbar"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="list_Wrapper">
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
