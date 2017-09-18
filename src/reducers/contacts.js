const contacts = (state= [], action) => {
    
    switch(action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    name: action.name,
                    number: action.number,
                    id: action.id,
                    selected: false
                }
            ]
        case 'TOGGLE_SELECTED':
            return state.map(contact => 
                (contact.id === action.id)
                ? {...contact, selected: !contact.selected}
                : contact
            )    
        default:
            return state
    }
        
}

export default contacts