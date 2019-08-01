import React from 'react'
import api from '../../../services/'

class Characters extends React.Component {
  componentDidMount(){
    api.characters.getAllCaracters().then(data => {
      this.props.getCharacters(data.results)
    })
  }
  render(){
    return ( 
      <div>
        <h1>Personajes</h1>
        <ul>
          {this.props.charactersList.map( (x, index) => <li key={index}>{x.name}</li>)}
        </ul>
      </div>
    )
  }
}
export default Characters