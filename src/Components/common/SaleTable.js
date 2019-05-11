import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import BookCell from "./BookCell";

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
});



class SaleTable extends Component {
  render() {
    const { classes, other } = this.props;
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
              {
                  (other.data.saleInfo.country) ? <BookCell name="Country" value={other.data.saleInfo.country} />  : null
              }
              {
                  (other.data.saleInfo.isEbook) ? <BookCell name="Is Ebook" value="Yes" />  : <BookCell name="Is Ebook" value="No" />
              }
              {
                  (other.data.saleInfo.saleability) ? <BookCell name="saleability" value={other.data.saleInfo.saleability} />  : null
              }
              {
                  (other.data.saleInfo.listPrice) ? <BookCell name="List Price" value={other.data.saleInfo.listPrice.amount} />  : null
              }
              {
                  (other.data.saleInfo.retailPrice) ? <BookCell name="Retail Price" value={other.data.saleInfo.retailPrice.amount} />  : null
              }
              {
                  (other.data.saleInfo.listPrice) ? <BookCell name="Currency" value={other.data.saleInfo.listPrice.currencyCode} />  : null
              }
              {
                  (other.data.saleInfo.buyLink) ? <BookCell name="Buy Link" value={(<a href={other.data.saleInfo.buyLink} target="_blank">Buy Now</a>)} />  : null
              }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}



SaleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SaleTable);