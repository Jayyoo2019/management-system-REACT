import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Customer2 from './components/Customer2';
import Customer3 from './components/Customer3';
import Customer4 from './components/Customer4';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


//Props를 이용해서 data출력하기
const customer2 = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  }

  const customer3 = {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
    }
    const customers4 = [
      {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '961222',
      'gender': '남자',
      'job': '대학생'
      },
      {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '나동빈',
      'birthday': '960508',
      'gender': '남자',
      'job': '프로그래머'
      },
      {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '이순신',
      'birthday': '961127',
      'gender': '남자',
      'job': '디자이너'
      }
      ]
      
      
class App extends Customer {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="buildpoint">
          <h2>1번째방법 App.js에서 바로 출력하기</h2>
          <p>유승재</p>
          <p>890605</p>
          <p>남자</p>
          <p>회사원</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Customer/>
        </a>
        <a
          className="link"
          href="https://github.com/"
        >
          Move to Github
        </a>
        <p>
            <h2>3번째방법 props이용해서 출력하기 : 
              1. 하위js에서 데이터를 입력하는대신 
              (this.props.---)형태로 class component만들고 rendering함. 
              2. App.js에서 props를 선언하고 데이터를 직접 입력해놓음
              3. 하위js에서 만든 component를 app.js의 div에 쓰고 만들어진 변수들을 역으로 하위js에서 사용
            </h2>
          <Customer2
            id={customer2.id}
            image={customer2.image}
            name={customer2.name}
            birthday={customer2.birthday}
            gender={customer2.gender}
            job={customer2.job}
          ></Customer2>
        </p>
        <p>
            <h2>4번째방법 : props이용 + component 구조화</h2>
            app.js에서 변수를 선언하고 데이터를 미리 입력해놓고 그걸 Customer3 컴포넌트에 넣어둠
            이렇게 생긴 Customer3 컴포넌트내용을 하위js에서 사용함 --> rendering하여 실제 화면에 보여짐
            추가된 점은, 가져온 내용별로 컴포넌트를 구조화하여 여러개로 만들고,
            각 컴포넌트 마다 함수를 만들어서 관리함
          <Customer3
            id={customer3.id}
            image={customer3.image}
            name={customer3.name}
            birthday={customer3.birthday}
            gender={customer3.gender}
            job={customer3.job}
          ></Customer3>
        </p>
        <p>어디?
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>번호</TableCell>
        <TableCell>이미지</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생년월일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {customers4.map(c => {
        return <Customer4 key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          }
        )
      }
    </TableBody>
  </Table>


        </p>
      </header>
    </div>
  );
}
}

  
  

export default App;


//C:\react\nd_blog> git commit -m "commit message"
//C:\react\nd_blog> git push --set-upstream origin master