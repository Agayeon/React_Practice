import { DiaryDispatchContext } from "project3/components/AppDiary";
import Button from "project3/components/Button";
import Editor from "project3/components/Editor";
import Header from "project3/components/Header";
import useDiary from "project3/hook/useDiary";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const onSubmit = (data) => {
    if (window.confirm("일기를 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/mydiary/", { replace: true });
    }
  };
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/mydiary/", { replace: true });
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title={"일기 수정하기"}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={
            <Button
              type={"negative"}
              text={"삭제하기"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};
export default Edit;
