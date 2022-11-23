import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { ShoppingBasketOutlined } from "@mui/icons-material";

export default function TemporaryDrawer({ cartQuantity }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h3 style={{ textAlign: "center" }}>
        {cartQuantity === 0
          ? "Cart Is Empty"
          : `Cart has ${cartQuantity} items`}
      </h3>
    </Box>
  );

  return (
    <React.Fragment>
      <Box className="iconContainer" onClick={toggleDrawer(true)}>
        <ShoppingBasketOutlined /> Cart
        <Box className="cartAlert">{cartQuantity}</Box>
      </Box>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
