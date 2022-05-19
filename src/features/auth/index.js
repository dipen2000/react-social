import authSlice from "./authSlice";

export { Login } from "./components/Login/Login";
export { Signup } from "./components/Signup/Signup";
export { loginHandler, signupHandler, logoutHandler } from "./authSlice";

export default authSlice.reducer;
