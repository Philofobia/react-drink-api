import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import DrinkList from "./list/drinkList";
import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { getDrinkByName } from "../../_service/api";
import { DrinkByName } from "../../_service/models";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [search, setCurrentSearch] = useState<string>("");
  const [drinks, setDrinks] = useState<DrinkByName[]>([]);
  const [itemCart, setItemCart] = useState<DrinkByName[]>([]);

  const handleOnSearchChange = (query: string) => {
    setCurrentSearch(query);
  };

  useEffect(() => {}, [itemCart]);

  const isSearchButtonDisabled = () => search.trim().length === 0;

  const handleOnButtonSearch = () => {
    getDrinkByName(search).then((res) => setDrinks(res));
  };

  const handleCart = (operation: boolean, drink: DrinkByName) => {
    if (operation === true) {
      setItemCart((itemCart) => [...itemCart, drink]);
    } else {
      setItemCart((itemCart) => itemCart.filter((el) => el !== drink));
    }
  };

  return (
    <>
      <Paper
        className="Input-box"
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="search drinks by name"
          inputProps={{ "aria-label": "search drinks by name" }}
          value={search}
          onChange={(e) => handleOnSearchChange(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button
          variant="contained"
          onClick={handleOnButtonSearch}
          disabled={isSearchButtonDisabled()}
        >
          SEARCH
        </Button>
      </Paper>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "10px", marginLeft: "10px" }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {drinks.map((el: DrinkByName) => (
            <DrinkList
              drink={el}
              cart={false}
              key={el.idDrink}
              handleCart={(e, operation, drink) => handleCart(operation, drink)}
            />
          ))}
        </List>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginTop: "10px",
          }}
        >
          {itemCart.map((el: DrinkByName, index: number) => (
            <DrinkList
              drink={el}
              cart={true}
              key={index}
              handleCart={(e, operation, drink) => handleCart(operation, drink)}
            />
          ))}
        </List>
      </Grid>
    </>
  );
};
export default Home;
