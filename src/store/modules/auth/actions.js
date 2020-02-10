export function signIn(user) {
   return {
      type: '@auth/SIGN_IN',
      payload: { user },
   };
}

export function signOut() {
   return {
      type: '@auth/SIGN_OUT',
   };
}
