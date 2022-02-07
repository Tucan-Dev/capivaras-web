import React, { createContext, useEffect, useState } from "react";
import Router from "next/router";

import { setCookie, parseCookies } from "nookies";

import { api } from "../services/api";

type userType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: string;
};

type SignInType = {
  email?: string;
  password?: string;
};

type AuthContextType = {
  User: userType | null;

  signIn: (data: SignInType) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [User, setUser] = useState<userType | null>(null);

  const [tokenJWT, setTokenJWT] = useState("");

  useEffect(() => {
    const { capivaras_token: token } = parseCookies();

    if (token) {
      // pegar no backend as informações do usuário através do token
      // setar os novos dados no user
    }
  }, []);

  async function signIn({ email, password }: SignInType) {
    const res = await api
      .post("/auth/signin", { email, password })
      .then((response: any) => {
        setTokenJWT(response.data.data.token);

        return response.data;
      });

    setTokenJWT(res.data.token);

    setCookie(undefined, "capivaras_token", tokenJWT, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser({
      id: res.user.id,
      name: res.user.name,
      surname: res.user.surname,
      email: res.user.email,
      phone: res.user.phone,
      role: res.user.role,
    });

    api.defaults.headers["Authorization"] = `Bearer ${tokenJWT}`;

    Router.push("dashboard/empresa");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        User,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
