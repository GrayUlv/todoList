import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
export class Element extends React.Component{
    handleClickRemoveTask(e){
        console.log("clicked");
    }
    render(){
        return(
            <li className="list-group-item text-left shadow-lg task">
                <span className="left">{this.props.taskTitle}</span>
                <span className ="rightx" 
                    onClick={() => this.props.onRemove(this.props.taskTitle)}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </li>
            );
    }
    
}

Element.propTypes = {
  taskTitle: PropTypes.string,
  onRemove: PropTypes.func
};

