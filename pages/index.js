import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  TodoForm,
  Header,
  Gap,
  TodoContent,
} from "../components";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App by Next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        style={{ backgroundColor: "#4c74c9", borderRadius: "10px", boxShadow: "10px 10px #1f3564" }}
      >
        <Header />

        <Gap />

        <TodoForm />

        <Gap />

        <TodoContent />

      </Container>
    </>
  );
}
