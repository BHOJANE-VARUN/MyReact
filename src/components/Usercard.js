import React from "react";
export class Aboutusclass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Name:"temp",
            Location:"temp",
            Contact:"temp"
        }
    }
    async componentDidMount() {
        const raw = await fetch("https://api.github.com/users/BHOJANE-VARUN");
        const data = await raw.json();
        this.setState({
            Name:data?.name,
            Location:data?.bio,
            Contact:data?.avatar_url
        })
    }  
    render(){

        const { Name,Location,Contact } = this.state;
        return (
            <div className="usercard">
                <img src={Contact}></img>
                <h1>Name: {Name}</h1>
                <h2>Bio: {Location}</h2>
                
            </div>
        )
    }
}