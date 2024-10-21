import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IUserReducer } from "./redux/reducer/userReducer";
import { AppState } from "./redux/reducer/rootReducer";
import { AppDispatch } from "./redux/store/store";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserRequest } from "./redux/action/userAction";
import { Box, Typography } from "@mui/material";

const UserInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector<AppState>((state) => state.user) as IUserReducer;

  useEffect(() => {
    dispatch(UserRequest());
  }, []);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
    },
    {
      field: "name",
      headerName: "User Name",
      headerAlign: "center",

      width: 350,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography>{params.row.name}</Typography>
        </Box>
      ),
    },
  ];
  return (
    <>
      <div>
        <div>User Info</div>
        <div>
          <DataGrid rows={user.users} columns={columns}></DataGrid>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
