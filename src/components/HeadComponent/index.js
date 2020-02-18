import React from "react";
import bannerBg from "./banner.jpg"
class HeadComponent extends React.Component {
  state = {
    headList: [
      { id: 0, name: "全国疫情" },
      { id: 1, name: "地区疫情" }
    ]
  };

  setNavItem(data) {
    return data.map(e => {
      return <div>{e.name}</div>;
    });
  }

  render() {
    return (
      <div className="head">
        <div className ="bar">
            <img src={bannerBg} width="100%" height="260px"></img>
        </div>
        <div className="nav">{this.setNavItem(this.state.headList)}</div>
      </div>
    );
  }
}

export default HeadComponent;
