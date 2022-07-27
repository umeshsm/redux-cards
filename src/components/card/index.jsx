import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Box,
  CardActions,
  CardContent,
  Card as MuiCard,
  Grid,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import {
  addCard,
  copyCard,
  deleteCard,
  saveCard,
} from "src/redux/slices/cardSlice";

import Button from "src/components/button";
import Input from "src/components/input/text";
import DateInput from "src/components/input/date";

function Card({ cardDetails }) {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: cardDetails,
  });
  const [edit, setEdit] = React.useState(false);

  function toggleEdit() {
    setEdit((prevState) => !prevState);
  }

  function handleCopy() {
    dispatch(copyCard(cardDetails.id));
  }

  function handleDelete() {
    dispatch(deleteCard(cardDetails.id));
  }

  function handleSave(data) {
    dispatch(
      saveCard({
        id: cardDetails.id,
        cardDetails: {
          ...data,
          project_budget: parseInt(data.project_budget),
        },
      })
    );
    toggleEdit();
  }

  return (
    <MuiCard
      raised
      sx={{
        width: 400,
        height: 220,
        backgroundColor: "#E7F6F2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{
            height: "100%",
          }}
          flexDirection="column"
          justifyContent="space-evenly"
          gap={1}
        >
          <Grid container item alignItems="center" gap={1}>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Card name :{" "}
              </Typography>
            </Grid>
            <Grid item flex={1}>
              {edit ? (
                <Input disabled={!edit} control={control} name="name" />
              ) : (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "500" }}
                  color="#395B64"
                >
                  {cardDetails.name}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container item alignItems="center" gap={1}>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Project budget :{" "}
              </Typography>
            </Grid>
            <Grid item flex={1}>
              {edit ? (
                <Input
                  disabled={!edit}
                  type="number"
                  control={control}
                  name="project_budget"
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "500" }}
                  color="#395B64"
                >
                  {cardDetails.project_budget}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container item alignItems="center" gap={1}>
            <Grid item>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Project end date :{" "}
              </Typography>
            </Grid>
            <Grid item flex={1}>
              {edit ? (
                <DateInput control={control} name="project_end_date" />
              ) : (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "500" }}
                  color="#395B64"
                >
                  {format(
                    new Date(JSON.parse(cardDetails.project_end_date)),
                    "dd-MM-yyyy hh:mm aaaaa'm'"
                  )}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Box sx={{ backgroundColor: "#395B64", height: "2px" }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {!edit ? (
          <>
            <Button onClick={handleCopy} startIcon={<ContentCopyIcon />}>
              Copy
            </Button>
            <Button onClick={toggleEdit} startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button onClick={handleDelete} startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button onClick={toggleEdit} startIcon={<CancelIcon />}>
              Cancel
            </Button>
            <Button onClick={handleSubmit(handleSave)} startIcon={<SaveIcon />}>
              Save
            </Button>
          </>
        )}
      </CardActions>
    </MuiCard>
  );
}

export default Card;
