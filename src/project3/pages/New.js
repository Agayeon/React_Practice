import Header from "project3/components/Header";
import Button from "project3/components/Button";
import { useNavigate } from "react-router-dom";
import Editor from "project3/components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "project3/components/AppDiary";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/mydiary/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
