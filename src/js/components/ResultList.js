import React from "react";

class Clicking extends React.Component{
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
    e.preventDefault();
    const click = true;
    console.log(this.props.post.title);
    alert(this.props.post.title)
  }
    render() {
        return (
            <img src={this.props.post.thumbnail} onClick={this.handleClick} />
        );
    }
}

export default class ResultList extends React.Component {

    render() {
    return (
      <ul>
        {this.props.list.map(post =>
          <li key={post.id}>
          <Clicking post={post} />
          </li>
        )}
      </ul>
    );
  }
}
