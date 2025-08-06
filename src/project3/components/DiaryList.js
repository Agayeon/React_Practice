import { useState } from "react";
import "../DiaryList_css/DiaryList.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const getSearchResult = () => {
    return search.trim() === ""
      ? sortedData
      : sortedData.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const onChangeSearch = (e) => setSearch(e.target.value);
  const navigate = useNavigate();

  const onClickNew = () => {
    navigate("/mydiary/new");
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>

        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="🔍 내용 검색..."
          value={search}
          onChange={onChangeSearch}
        />
      </div>
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
