import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";

function Test() {
  const [product, setProduct] = useState("Desktop");

  return (
    <Fragment>
      <h1>Product: </h1>
      <p>Do you wanna buy a {product}</p>
      <Button onClick={() => setProduct("Laptop")}>Change product</Button>
      {/* commit check */}

    </Fragment>
  );
}

export default Test;
