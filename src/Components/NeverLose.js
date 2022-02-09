import { ResetTvRounded } from "@mui/icons-material";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import { makeStyles } from "@mui/styles";
require("firebase/database");

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
    },
  },
});

const NeverLose = () => {
  const classes = useStyles();

  const [handleData, setHandleData] = useState([]);

  useEffect(() => {
    const fireStore = firebase.database().ref("ContactUsUserInfo");
    fireStore.on("value", (res) => {
      const Data = res.val();
      let userData = [];
      for (let id in Data) {
        userData.push({
          id: id,
          Name: Data[id].Name,
          Email: Data[id].Email,
          ContactNo: Data[id].ContactNo,
          Country: Data[id].Country,
          Message: Data[id].Message,
        });
      }
      setHandleData(userData);
    });
  }, []);


  const arr = [
    { name: "heelo", id: "hdn" },
    { name: "yasir", id: "fff" },
    { name: "lolo", id: "kk" },
    { name: "chaddi", id: "ll" },
  ];

  let newArray = [];
  let newKey = 0;
  handleData
    ? handleData.map((currElem) => {
        newKey = newKey + 1;
        newArray.push({
          id: currElem.id,
          "S.no": newKey,
          Name: currElem.Name,
          Email: currElem.Email,
          "Contact No": currElem.ContactNo,
          Country: currElem.Country,
          Message: currElem.Message,
        });
      })
    : console.log("Sorry");


  return (
    <>
      {/* {
                handleData ? handleData.map((currElem) => {
                    return <h6>{currElem.Name}</h6>
                }) : <h1>.....Looding</h1>
            } */}

      <div className={classes.root} style={{ height: 400, width: "100%" }}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          columns={[
            {
              field: "S.no",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "Name",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "Email",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "Contact No",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "Country",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
            {
              field: "Message",
              minWidth: 150,
              headerClassName: "super-app-theme--header",
            },
          ]}
          rows={newArray}
        />
      </div>
    </>
  );
};

export default NeverLose;
