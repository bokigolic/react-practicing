const initialState = {
  nesto: 'bla bla'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'NEKI_ACTION':
      return state;


    default:
      return state;
  }
};

export default reducer;