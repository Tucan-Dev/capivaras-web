import React, { useEffect, useState } from "react";
import Router from "next/router";

import { Splash } from "../styles/commonStyles";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      setLoading(false);

      Router.push("/home");
    }
  });

  return (
    <Splash>
      <PulseLoader color={color} loading={loading} size={20} margin={25} />
    </Splash>
  );
}
