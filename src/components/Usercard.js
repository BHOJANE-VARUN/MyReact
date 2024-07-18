import React from "react";
export class Aboutusclass extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(props)
    }
    render(){
        return (
            <div className="usercard">
                <h1>{this.props.name}</h1>
                <h2>Location:yeola</h2>
                <h2>Contact: varunbhojane@gmail.com</h2>
            </div>
        )
    }
}