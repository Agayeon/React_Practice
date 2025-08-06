import React, { Component } from "react";
import "componenets2/say.css";
class Say extends Component {
  // 상태관리
  //   constrctor() {
  //     super();
  //     // 생성자에서 코드를 추가하는 경우 반드시 부모 호출 문장을 먼저 사용한다.
  //     this.state = {
  //       message: "버튼을 눌러주세요",
  //       color: "black",
  //     };

  state = {
    message: "버튼을 눌러주세요",
    color: "purple",
  };

  changeMessageHandelr = (e) => {
    this.setState({ message: e.target.innerText });
  };
  changeColorHandelr = (e) => {
    var colorName = e.target.innerText;
    if (colorName === "빨간색") {
      colorName = "red";
    } else if (colorName === "초록색") {
      colorName = "green";
    } else {
      colorName = "blue";
    }
    this.setState({ color: colorName }, () => {
      //setState는 비동기
      console.log(this.state);
    });
  };

  render() {
    const { message, color } = this.state;
    return (
      <div className="say-container">
        {/* 입장/퇴장 버튼 그룹 */}
        <div className="button-group">
          <button
            style={{ color: color }}
            className="say-button"
            onClick={this.changeMessageHandelr}
          >
            입장
          </button>
          <button className="say-button" onClick={this.changeMessageHandelr}>
            퇴장
          </button>
        </div>
        <hr className="divider" />
        {/* 색상 변경 버튼 그룹 */}
        <div className="button-group">
          <button
            className="say-button color-red"
            onClick={this.changeColorHandelr}
          >
            빨간색
          </button>
          <button
            className="say-button color-green"
            onClick={this.changeColorHandelr}
          >
            초록색
          </button>
          <button
            className="say-button color-blue"
            onClick={this.changeColorHandelr}
          >
            파란색
          </button>
        </div>
        {/* 메시지 표시 영역 */}
        <h1 className="message-display" style={{ color: color }}>
          {this.state.message}
        </h1>
        <h1 className="message-display">{message}</h1>
        <p className="color-status">현재 색상: {color}</p>
      </div>
    );
  }
}

export default Say;
