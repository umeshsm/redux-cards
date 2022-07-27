import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Card as MuiCard,
  Chip,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddBoxIcon from "@mui/icons-material/AddBox";
import NumbersIcon from "@mui/icons-material/Numbers";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useSelector, useDispatch } from "react-redux";

import { addCard } from "src/redux/slices/cardSlice";
import { getNewCardDetails, getTotalBudget } from "src/helpers";

import Button from "src/components/button";
import Card from "src/components/card";
import Chart from "src/components/chart";

import "src/App.css";
import { Box } from "@mui/system";

function App() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const totalProjects = cards.length;
  const totalBudget = getTotalBudget(cards);

  function handleAddCard() {
    const newCard = getNewCardDetails(cards.length);
    dispatch(addCard(newCard));
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      gap={3}
      sx={{ marginTop: "90px" }}
    >
      <AppBar sx={{ backgroundColor: "#395B64" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Chip
              sx={{ fontSize: "20px" }}
              color="info"
              icon={<NumbersIcon />}
              label={`Total Projects - ${totalProjects}`}
            />
            <Chip
              sx={{ fontSize: "20px" }}
              color="info"
              icon={<AttachMoneyIcon />}
              label={`Total Budget - ${totalBudget}`}
            />
          </Box>
          <Button
            sx={{ color: "white" }}
            startIcon={<AddBoxIcon />}
            onClick={handleAddCard}
          >
            Add Card
          </Button>
        </Toolbar>
      </AppBar>
      <Grid item sx={{ width: "50%", minWidth: "300px" }}>
        <MuiCard raised>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#A5C9CA" }}
            >
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                Product Budget Chart
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#E7F6F2" }}>
              <Chart cards={cards} />
            </AccordionDetails>
          </Accordion>
        </MuiCard>
      </Grid>
      <Grid container item alignItems="center" justifyContent="center" gap={3}>
        {cards.map((item) => (
          <Grid item key={item.id}>
            <Card cardDetails={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
