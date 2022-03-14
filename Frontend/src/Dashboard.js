import React, { Component } from 'react';
import {
  Button, TextField, Dialog, DialogActions, LinearProgress,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
const axios = require('axios');

export default class Dashboard extends Component {

  logOut = () => {
    localStorage.setItem('token', null);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div>
          <h2>BINGO CARD</h2>
          <Button
            className="button_style"
            variant="contained"
            size="small"
            onClick={this.logOut}
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>
    );
  }
}