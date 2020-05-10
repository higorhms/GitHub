const INITIAL_STATE = { profile: null };

interface User {
  id: string;
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
}

interface Profile {
  user: User;
}

interface State {
  profile: Profile | null;
}

interface Action {
  type: string;
  payload: Profile | null;
}

const user = (state = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case '@auth/SIGN_IN': {
      return { ...state, profile: action.payload };
    }
    case '@auth/SIGN_OUT': {
      return { ...state, profile: null };
    }
    default: {
      return state;
    }
  }
};

export default user;
