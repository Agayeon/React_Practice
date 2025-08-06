import Header from "project3/components/Header";
import useDiary from "project3/hook/useDiary";
import { getFormattedDate } from "project3/utill/util";
import Button from "project3/components/Button";
import { useNavigate, useParams } from "react-router-dom";
import Viewer from "project3/components/Viewer";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/mydiary/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};
export default Diary;
