const ESTADO_INICIAL = {
  charactersAreLoading: false,
  charactersListError: false,
  charactersList: []
}

export const charactersReducer = (state=ESTADO_INICIAL, action)=> {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {...state, charactersList: action.payload.results}
    default:
      return state
  }
}
