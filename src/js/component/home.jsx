import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>todos</h1>
                <ul className="list-group w-50 mx-auto">
                    <li className="list-group-item ">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        );
    }
}
