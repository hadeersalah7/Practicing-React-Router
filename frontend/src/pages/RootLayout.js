import React, { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

export default function RootLayout() {
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(() => {

    if (!token) {
      return
    }

    setTimeout(() => {
submit(null, {action: "/logout", method: "post"})
    }, 1 * 60 * 60 * 1000 , timeout)
  }, [token, submit])


  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
