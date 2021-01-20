import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

class CharacterTable extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='table-container'>
                {this.props.isLoading ?
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
                            {this.props.characterData.map(data => 
                                <tr key={data.name}>
                                    <td> {data.name} </td>
                                    <td> {data.birth_year} </td>
                                    <td> {data.height}cm </td>
                                    <td> {data.mass}kg </td>
                                    <td> {data.homeworld} </td> 
                                    <td> {data.species} </td>
                                </tr>)}
                        </tbody>
                        </table> :
                    <ReactBootstrap.Spinner animation="border" />}
            </div>
        )
    }
}

export default CharacterTable