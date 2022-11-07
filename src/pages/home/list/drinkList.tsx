import { DrinkByName } from "../../../_service/models";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import React from "react";

interface props {
  drink: DrinkByName;
  cart: boolean;
  handleCart: (e:  React.MouseEvent<HTMLButtonElement>, operation: boolean, drink: DrinkByName) => void;
}


const DrinkList = (props: props) => {
  if (props.cart === false) {
    return (
      <>
        <ListItem alignItems="flex-start" style={{ padding: "10px" }}>
          <ListItemAvatar>
            <Avatar
              alt={props.drink.name}
              src={props.drink.image + "/preview"}
            />
          </ListItemAvatar>
          <ListItemText
            primary={props.drink.name}
            secondary={
              <React.Fragment>
                <Button variant="contained" style={{ margin: "5px" }}>
                  DETAILS
                </Button>
                <Button
                  variant="contained"
                  style={{ margin: "5px" }}
                  color="success"
                  onClick={(event) => props.handleCart(event, true, props.drink)}
                >
                  ADD
                </Button>
                <Button
                  variant="contained"
                  style={{ margin: "5px" }}
                  color="error"
                  onClick={(event) => props.handleCart(event, false, props.drink)}
                >
                  REMOVE
                </Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  } else {
    return (
      <>
        <ListItem alignItems="flex-start" style={{ padding: "10px" }}>
          <ListItemAvatar>
            <Avatar
              alt={props.drink.name}
              src={props.drink.image + "/preview"}
            />
          </ListItemAvatar>
          <ListItemText primary={props.drink.name} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  }
};

export default DrinkList;
