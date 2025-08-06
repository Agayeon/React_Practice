import { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const onClickDelete = () => {
    onDelete(id);
  };
  const onChangeCheckbox = () => {
    onUpdate(id, { isDone: !isDone }); // isDone만 변경할 수 있도록
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
    setEditContent(content); // 원래 내용으로 초기화
  };
  const onChangeEdit = (e) => {
    setEditContent(e.target.value);
  };

  const onKeyDownEdit = (e) => {
    if (e.key === "Enter") {
      onUpdate(id, { content: editContent });
      setIsEdit(false);
    }
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col" onDoubleClick={toggleEdit}>
        {isEdit ? (
          <input
            value={editContent}
            onChange={onChangeEdit}
            onKeyDown={onKeyDownEdit}
            onBlur={() => setIsEdit(false)} // 포커스 잃으면 취소
            autoFocus
          />
        ) : (
          content
        )}
      </div>
      <div className="data_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
