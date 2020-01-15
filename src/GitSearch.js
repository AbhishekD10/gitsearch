import React, { Component } from 'react';
import GetUsername from './GetUsername';
import DisplayData from './DisplayData';
import './GitSearch.css'

class GitSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            location: '',
            repos: '',
            followers: '',
            url: '',
            create: '',
            pic: '',
        };
    }

    extractAndSetData = (data) => {
        let { login,html_url,location,public_repos,followers,created_at,avatar_url } = data;
        this.setState({
            username: login,
            location: location,
            repos: public_repos,
            followers: followers,
            url: html_url,
            create: created_at,
            pic: avatar_url
        });
    }

    handleName = (obj) => {
        let requestURL = 'https://api.github.com/users/'+obj.name;
        fetch(requestURL).then(res => res.json()).then(data => this.extractAndSetData(data));
    }

    render(){
        return (
        <div className="gitsearch">
            <GetUsername handleName={this.handleName} />
            <DisplayData displaydata={this.state} />
        </div>
        );
    }
}

export default GitSearch;