import React from "react";
import "../DiaryList_css/EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick(id);
    }
  };
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
