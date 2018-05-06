import React from 'react';
import {Element} from './Element.jsx';
// import {InputElement} from './InputElement.jsx';

//include images into your bundle
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
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
                <ul className="list-group w-25 mx-auto">
                    <li className="list-group-item">
                        <input type="text" className="form-control" 
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" 
                        onKeyPress={(event) => this.handleClickNewTask(event)} />
                    </li>
                    {listTasks}
            
                    <li className="list-group-item text-left folder1 "></li>
                    <li className="list-group-item text-left folder2 "></li>
                </ul>
                
            </div>
        );
    }
}
