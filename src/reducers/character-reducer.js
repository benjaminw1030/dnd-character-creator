import * as c from './../actions/ActionTypes';

// export default (state = {}, action) => {
//   const { id, formattedWaitTime } = action;
//   switch (action.type) {
//   case c.DELETE_TICKET:
//     const newState = { ...state };
//     delete newState[id];
//     return newState;
//   case c.UPDATE_TIME:
//     const updatedTicket = Object.assign({}, state[id], {formattedWaitTime});
//     const updatedState = Object.assign({}, state, {
//       [id]: updatedTicket
//     });
//     return updatedState;
//   default:
//     return state;
//   }
// };