import React from "react";
import { redirect } from "react-router-dom";

export default function getAuthToken() {
  const token = localStorage.getItem("token");

  return token;
}

export function loader (){
    return getAuthToken()
}

export function checkAuthLoader(){
    const token = getAuthToken()
     if (!token) {
        return redirect('/auth')
     }
     return null
}