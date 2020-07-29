import React from "react";

import "./avatar.styles.scss";

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userdata: props.userInformation,
    };
  }

  render() {
    const { photoURL } = this.state.userdata;
    return (
      <div>
        <img src={photoURL} alt="Avatar" className="avatar"></img>
      </div>
    );
  }
}

export default Avatar;
