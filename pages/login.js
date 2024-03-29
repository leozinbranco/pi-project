import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { style } from "@mui/system";
import * as React from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleLogin = () => {
    // fetch('')  // TO DO: Utilizar cookies para armazenar login.
    console.log("LOGIN");
    router.push("/home");
    // if (user === "admin" && senha === "1234") router.push("/home");
    // else alert("Informações inválidas!");
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div style={{ minWidth: "40%", backgroundColor: "#0013FF" }}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Bem vindo!</h1>

          <p className={styles.description}>Logue para começar!</p>
          <Image
            src="/Sign up-rafiki.svg"
            alt="Sign up page"
            width={450}
            height={450}
          />
          <div className={styles.grid}></div>
        </main>
      </div>
      <div
        style={{
          backgroundColor: "#EAEAEA",
          display: "flex",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div className={styles.formContainer}>
          <div className={styles.floatContainer}>
            <h1 className={styles.titleForm}>Login</h1>
            <TextField
              label="Login"
              className={styles.textFieldLogin}
              value={user}
              onChange={handleChangeUser}
            ></TextField>
            <TextField
              type="password"
              label="Senha"
              value={senha}
              onChange={handleChangeSenha}
              className={styles.textFieldPassword}
            ></TextField>
            <div
              style={{
                margin: "20px",
                display: "flex",
                width: "235px",
                alignSelf: "center",
              }}
            >
              <Button
                onClick={handleLogin}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
                size="large"
                variant="contained"
              >
                ENTRAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
