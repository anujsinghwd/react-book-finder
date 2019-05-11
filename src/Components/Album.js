import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import RecipeReviewCard from "./Card";

import { getBooks } from "../Actions/BookActions";
import { connect } from "react-redux";
import Loader from './common/Loader';
import Footer from "./common/Footer";


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
});

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Album extends Component {

  componentDidMount(){
    this.props.getBooks({txt: 'Marvel'});
    window.scrollTo(0, 0);
  }

  render() {
    let cards = [];
    const { classes, books } = this.props;
    if(books.books.items !== undefined){
        cards = books.books.items;
    }
    return (
      <div>
          <Loader query={this.props.books.loading}/>
          <main>
        {/* Hero unit */}
        <div className={classes.heroUnit} style={{backgroundColor: 'gainsboro'}}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Book Finder
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Good friends, good books, and a sleepy conscience: this is the ideal life.
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card.id} sm={6} md={4} lg={4}>
                  <RecipeReviewCard data={card}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
            <Footer />
      {/* End footer */}
      </div>
    )
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  books: state.books,
  errors: state.errors
});

export default withStyles(styles)(connect(mapStateToProps,{ getBooks })(Album));