import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //null -> anyone
  //true -> only sign in user
  //false -> not sing in user

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      //  Axios.get("/api/users/auth")
      dispatch(auth()).then((response) => {
        console.log(response);

        if (!response.payload.isAuth) {
          //not sign in
          if (option) {
            props.history.push("/login");
          }
        } else {
          //sign in
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (!option) props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
