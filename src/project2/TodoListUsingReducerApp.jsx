import Header from "project2/components/Header";
import TodoEditor from "project2/components/TodoEditor";
import TodoList from "project2/components/TodoList";
import { useReducer, useRef, useState } from "react";
import "project2/css/TodoListApp.css";
import { mockTodo } from "project2/data/mockData";
import { todoReducer } from "project2/todoReducer";
import {
  TodoContext,
  TodoDispatchContext,
  TodoStateContext,
} from "context/TodoContext";
import { useMemo } from "react";

function TodoListUsingReducerApp() {
  //1)useState()로 상태관리 : Component내부에서 값의 변경을 관리 , 로직이 내부에있음
  //const [todo, setTodo] = useState(mockTodo); //배열
  //2)useReducer로 상태관리 : Component외부에서 값의 변경을 관리 , 로직이 외부에있음
  // [현재상태값, 외부로직의 이벤트발생유발(함수호출임)] = useReducer(외부로직, 초기값)
  const [todo, dispatch] = useReducer(todoReducer, mockTodo); //배열

  const idRef = useRef(3); //Re Rendering되어도 다시 초기화안함, 값이변경되어도 Rendering안함

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };

    //setTodo([newItem, ...todo]); //신규를 앞쪽에 추가, 배열복사
    dispatch({ type: "CREATE", newItem });
    idRef.current += 1;
  };

  const onUpdate = (targetId, colname, value) => {
    dispatch({ type: "UPDATE", targetId, colname, value });
  };

  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };
  //컴포넌트가 Rendering되면 다시 생성된다.
  // const memoizedDispatches = { onCreate, onUpdate, onDelete };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="todo-container">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default TodoListUsingReducerApp;
