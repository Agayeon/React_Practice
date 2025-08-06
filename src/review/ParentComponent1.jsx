import React from "react";
import { useState } from "react";
import HobbyInput from "./HobbyInput";
import HobbyDisplay from "./HobbyDisplay";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef } from "react";

function ParentComponent1(props) {
  console.log("부모 Rendering");

  //부모에서만 사용되는 상태값
  const [trip, setTrip] = useState("미국");
  const tripChangehandler = (e) => {
    setTrip(e.target.value);
  };
  //부모에서 자식에 전달되는 상태값, hobby, hobbyArr
  const [hobby, setHobby] = useState({ id: 1, title: "수영", price: 50000 }); //id, title, price
  const [hobbyArr, setHobbyArr] = useState([hobby]); //[{}, {}, {}]
  const longTimeFunction = () => {
    console.log("작업 중");
    let total = 0;
    for (let i = 1; i <= 1000000; i++) {
      total += i;
    }
    return total;
  };
  const [count, setCount] = useState(0);
  const computeResult = useMemo(() => longTimeFunction(count), [count]);

  const [id1, setId1] = useState(2); // 값 변경시 재랜더링, 컴포넌트가 랜더링 시 재초기화
  var id2 = 2; // 값 변경시 제렌더링 안됨
  const id3 = useRef(2); //값 변경 시 재랜더링 안됨

  const hobbyChangeHandler = useCallback(
    (e) => {
      setHobby({ ...hobby, [e.target.name]: e.target.value });
    },
    [hobby]
  );

  const addClickHandler = useCallback(() => {
    console.log(`state관리:${id1} 일반변수:${id2} useRef:${id3.current}`);

    setId1(id1 + 1); // useState 값 업데이트
    id2++; // 일반 변수 증가
    id3.current++; // useRef 값 증가

    setHobbyArr([...hobbyArr, hobby]);
  }, [hobbyArr, hobby, id1, id2]);

  return (
    <div>
      <h1>
        부모 Component: {trip} 여행중..... computeResult: {computeResult}
      </h1>
      <input onChange={tripChangehandler} />
      <input
        type="number"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <HobbyInput
        hobbyChangeHandler={hobbyChangeHandler}
        addClickHandler={addClickHandler}
      ></HobbyInput>
      <HobbyDisplay hobbyArr={hobbyArr} />
      {/* <ChildComponent1 money={1000} house="33평">
        자식1
      </ChildComponent1>
      <ChildComponent1>자식2</ChildComponent1> */}
    </div>
  );
}

export default ParentComponent1;
