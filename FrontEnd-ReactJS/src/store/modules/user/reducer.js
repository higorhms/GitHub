const INITIAL_STATE = { profile: null };

export default function user(state = INITIAL_STATE, action) {
   switch (action.type) {
      case '@auth/SIGN_IN_SUCESS': {
         return state;
      }
      case '@auth/SIGN_OUT': {
         return state;
      }
      default: {
         return state;
      }
   }
}
