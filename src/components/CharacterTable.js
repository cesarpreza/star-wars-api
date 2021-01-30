import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function CharacterTable(props) {

    if (props.isLoading === true) {
        return <ReactBootstrap.Spinner animation="border" />
    } else {
        return (
            <div className='table-container'>
                    <table className='table table-bordered'>
                        <thead className="text-light">
                            <tr>
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Height</th>
                                <th>Mass</th>
                                <th>Homeworld</th>
                                <th>Species</th>    
                            </tr>
                        </thead>
                        <tbody className="text-light">
                            {props.characterData.map(data => 
                                <tr key={data.name}>
                                    <td> {data.name} </td>
                                    <td> {data.birth_year} </td>
                                    <td> {data.height}cm </td>
                                    <td> {data.mass}kg </td>
                                    <td> {data.homeworld} </td> 
                                    <td> {data.species} </td>
                                </tr>)}
                        </tbody>
                        </table>
            </div>
        )
    };
    
};

export default CharacterTable