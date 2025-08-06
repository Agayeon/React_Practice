import { DiaryStateContext } from "project3/components/AppDiary";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기장이 존재하지 않습니다.");
      navigate("/mydiary/", { replace: true });
    }
  }, [id, data]);
  return diary;
};
export default useDiary;
