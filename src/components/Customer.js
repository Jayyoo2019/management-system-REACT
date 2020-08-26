import React from 'react';
import './Customer.css';
class Customer extends React.Component{
    render(){
        return(
            <div className="customer">
                <h2>2번째방법 : js파일을 따로 만들고, 그 안에서 class component를 만들어서 App.js에서는 component만 불러옴</h2>
                <h2>유승재</h2>
                <p>890605</p>
                <p>남자</p>
                <p>직장인</p>
            </div>
        )
    }
}


export default Customer;