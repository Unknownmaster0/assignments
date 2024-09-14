import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";

function App() {
  return (
    <>
      <Card
        name={"sagar singh"}
        description={"this is sagar singh"}
        interests={["boxing", "chess", "teaching"]}
      />
      <Card
        name={"sagar singh"}
        description={"this is sagar singh"}
        interests={["boxing", "chess", "teaching"]}
      />
      <Card
        name={"sagar singh"}
        description={"this is sagar singh"}
        interests={["boxing", "chess", "teaching"]}
      />
      <Card
        name={"sagar singh"}
        description={"this is sagar singh"}
        interests={["boxing", "chess", "teaching"]}
      />
    </>
  );
}

export default App;
