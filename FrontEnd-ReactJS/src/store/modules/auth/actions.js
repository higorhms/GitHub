export function signIn(user) {
   return {
      type: '@auth/SIGN_IN',
      payload: { user },
   };
}
