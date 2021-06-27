import React,{Component} from 'react';
import Table from './Table';
import Form from './Form'
class App extends Component{
  state = {
    characters:[
    ],
  };
  // removeCharacter从表中删除一个字符
  removeCharacter =(index)=>{
    const {characters}=this.state;
    // 通过this.setState更新state
    this.setState({
      characters:characters.filter((characters,i) => {
        return i !== index
      })
    })
  };
  handleSubmit = (character) => {
    this.setState({characters:[...this.state.characters, character]})
  } 
     render(){
      const {characters} = this.state;
        return(
            <div className='container'>
                {/* Table属性将数据传递给子组件 ( ) 属性名自定义非关键字*/}
                {/* 然后在另一端子组件访问 */}
                <Table characterData = {characters} removeCharacter = {this.removeCharacter} />
                <Form handleSubmit = {this.handleSubmit} />
            </div>
        )
    }
}
export default App;