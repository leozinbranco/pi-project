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

export default function Home() {
  const router = useRouter();
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
            ></TextField>
            <TextField
              type="password"
              label="Senha"
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
                onClick={() => router.push("/home")}
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
