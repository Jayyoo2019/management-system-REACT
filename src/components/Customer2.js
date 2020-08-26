import React from 'react';

class Customer2 extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
                <p>{this.props.id}</p>
            </div>

        )
    }
}

export default Customer2;