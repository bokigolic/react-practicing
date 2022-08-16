const initialState = {
  nesto: 'bla bla',
  modalComponent: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'MODAL_OPEN':
      return {
        ...state,
        modalComponent: action.payload
      };

    case 'MODAL_CLOSE':
      return {
        ...state,
        modalComponent: null
      };


    default:
      return state;
  }
};

export default reducer;