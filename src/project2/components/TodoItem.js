import "project2/css/TodoItem.css";
import React from "react";
import { useState } from "react";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  console.log(`${id} item변경`);
  const onChangeCheckbox = () => {
    onUpdate(id, "isDone", null);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  const [updateContent, setUpdateContext] = useState(content);
  const contentHandler = (e) => {
    setUpdateContext(e.target.value);
    //onUpdate(id, "content", e.target.value);
  };
  const onClickUpdate = (e) => {
    onUpdate(id, "content", updateContent);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">
        <input value={updateContent} name="content" onChange={contentHandler} />
        <button onClick={onClickUpdate}>수정</button>
      </div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
