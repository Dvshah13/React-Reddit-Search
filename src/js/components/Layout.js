import React from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
// import Reddit from "./Reddit";
import axios from 'axios';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            search:"reactjs",
            posts: []
        };
        this.doSearch = this.doSearch.bind(this);
    }

    // componentDidMount(){
    // }

    doSearch(search,event){
        console.log("doing the search:");
        // console.log(a);
        // console.log(b);
        this.setState({
            search:search
        });

        axios.get(`http://www.reddit.com/r/${search}.json`)
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            console.log(posts);
            this.setState({
                posts:posts
            });
          });
    }

    render() {
        var displayShowResults = false;
        let list = <li>{}</li>;

        return (
            <div>
            <div id="SearchBar">
            <h1>{this.state.search}</h1>
            <SearchBar doSearch={this.doSearch} />
            </div>
            <div id="list">
                 <ResultList list={this.state.posts} />
            </div>
            </div>

        );

  }
}
