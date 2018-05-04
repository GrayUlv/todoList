import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>todos</h1>
                <ul className="list-group w-25 mx-auto ">
                    <li className="list-group-item text-left shadow-lg">Cras justo odio</li>
                    <li className="list-group-item text-left shadow-lg">Dapibus ac facilisis in</li>
                    <li className="list-group-item text-left shadow-lg">Morbi leo risus</li>
                    <li className="list-group-item text-left shadow-lg">Porta ac consectetur ac</li>
                    <li className="list-group-item text-left shadow-lg">Vestibulum at eros</li>
                    
                    <li className="list-group-item text-left folder1 "></li>
                    <li className="list-group-item text-left folder2 "></li>
                </ul>
                
            </div>
        );
    }
}
