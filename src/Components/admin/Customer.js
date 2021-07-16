import React, { useState, useEffect } from "react";
import "./AdminCont.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Customer() {
  const classes = useStyles();
  return (
    <div className="admin_space">
      <h1>Customer Information</h1>
      <div className="container customer_cont">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sr No.</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Mob No.</TableCell>
                <TableCell align="left">E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="left">Prashant</TableCell>
                <TableCell align="left">23456789</TableCell>
                <TableCell align="left">ak@x.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Customer;
