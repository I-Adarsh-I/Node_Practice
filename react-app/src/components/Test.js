import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function Test() {
  //   const [product, setProduct] = useState("Desktop");
  //   const [toggle, setToggle] = useState(false);
  const [pageTitle, setPageTitle] = useState("Page Title");
  useEffect(() => {
    alert("Page loaded!");
  }, []);

  const clickHandler = () => {
    if(pageTitle === 'Page Title'){
      setPageTitle("Page title 1");
    }else{
      setPageTitle('Page Title')
    }
  }

  //syntax for GET Method.
  // useEffect(() => {
  //   fetch('url', {
  //     method:'GET'
  //   }).then((data =>data))
  // })
    return (
      <Fragment>
        <h1>{pageTitle}</h1>
        <Button variant="secondary" type="button" onClick={clickHandler}>
          Toggle title
        </Button>
        {/* <p>Do you wanna buy a {product}</p>
      <Button onClick={() => setProduct("Laptop")}>Change product</Button> */}
      </Fragment>
    );
  };

export default Test;
