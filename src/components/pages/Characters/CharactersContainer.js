import {connect} from 'react-redux'
import Characters from './Characters'

const mapStateToProps = state => {
  return{
    charactersAreLoading: state.charactersAreLoading,
    charactersListError: state.charactersListError,
    charactersList: state.charactersList
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    getCharacters: listado => {
      return dispatch({type: 'GET_CHARACTERS', payload: {results: listado}})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)