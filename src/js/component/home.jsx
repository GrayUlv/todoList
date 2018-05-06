import React from 'react';
import {Element} from './Element.jsx';
// import {InputElement} from './InputElement.jsx';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    constructor(){
        super();
        this.state={"task":[]};
    }
     handleClickNewTask(e){
        if(e.charCode == 13){
            let tempState = this.state;
            tempState.task.push(e.target.value);
            this.setState(tempState);
            e.target.value ="";
            console.log(e.target.value);
        }
    }
    render(){
        
        var listTasks= this.state.task.map((element, index) =>{
        return <Element key={index} taskTitle={element}/>;});
        return (
            <div className="text-center mt-5">
                <h1>todos</h1>
                <ul className="list-group w-50 mx-auto">
                    <li className="list-group-item">
                        <input type="text" className="form-control" 
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" 
                        onKeyPress={(event) => this.handleClickNewTask(event)} />
                    </li>
                    {listTasks}
                    
                </ul>
            </div>
        );
    }
}
