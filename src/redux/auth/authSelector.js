export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserIsRefreshing = state => state.auth.isRefreshing;
