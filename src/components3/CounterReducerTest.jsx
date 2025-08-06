import { useReducer } from "react";
import "./ReducerTest.css";

// 상태를 어떻게 바꿀지 정의하는 리듀서 함수
function reducer(state, action) {
  // action의 타입에 따라 현재 상태 state를 받아서 다음 상태를 만들어 return함
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const ReducerTest = () => {
  // 상태관리 : useState Hook 이용... 컴포넌트 내에서 상태관리를 한다. 로직이 복잡해지면, 관리할 변수가 많아지면 컴포넌트의 유지보수가 어렵다.
  // 1. useState() 이용
  // const [count, setCount] = useState(0); // count=0
  // 2. useReducer 이용
  // useReducer를 사용하여 number 상태와 dispatch 함수를 받아옴
  const [number, dispatch] = useReducer(reducer, 0);

  // '+1' 버튼 클릭 시 INCREMENT 액션을 디스패치(발생)시킴
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  // '-1' 버튼 클릭 시 DECREMENT 액션을 디스패치(발생)시킴
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="reducer-test-container">
      <h1 className="number-display">{number}</h1>
      <div className="button-wrapper">
        <button className="control-button decrease" onClick={onDecrease}>
          -1
        </button>
        <button className="control-button increase" onClick={onIncrease}>
          +1
        </button>
      </div>
    </div>
  );
};

export default ReducerTest;
