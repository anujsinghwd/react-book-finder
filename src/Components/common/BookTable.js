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



class BookTable extends Component {
  render() {
    const { data, classes } = this.props;
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
              {
                  (data.authors) ? <BookCell name="Author" value={data.authors.join()} />  : null
              }
              {
                  (data.averageRating) ? <BookCell name="AverageRating" value={data.averageRating} />  : null
              }
              {
                  (data.canonicalVolumeLink) ? <BookCell name="Open In Play Books" value={(<a href={data.canonicalVolumeLink} target="_blank">Open</a>)} />  : null
              }
              {
                  (data.previewLink) ? <BookCell name="Open Preview" value={(<a href={data.previewLink} target="_blank">Open</a>)} />  : null
              }
              {
                  (data.categories) ? <BookCell name="Categories" value={data.categories.join()} />  : null
              }
              {
                  (data.language) ? <BookCell name="Language" value={data.language} />  : null
              }
              {
                  (data.readingModes) ? <BookCell name="Image Reading" value={(data.readingModes.image) ? 'Available' : 'N/A'} />  : null
              }
              {
                  (data.readingModes) ? <BookCell name="Text Reading" value={(data.readingModes.text) ? 'Available' : 'N/A'} />  : null
              }
              {
                  (data.pageCount) ? <BookCell name="Total Pages" value={data.pageCount} />  : null
              }
              {
                  (data.publisher) ? <BookCell name="Publisher" value={data.publisher} />  : null
              }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}



BookTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookTable);