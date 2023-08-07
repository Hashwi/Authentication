import React from "react";

export default function getAuthToken() {
  const token = localStorage.getItem("token");

  return token;
}

export function loader (){
    return getAuthToken()
}