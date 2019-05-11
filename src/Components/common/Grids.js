import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import BookTable from './BookTable';
import Footer from './Footer';
import BookInfoTab from './BookInfoTab';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class Grids extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { volumeInfo } = this.props.location.state.data;
    let imgLink = (volumeInfo.imageLinks) ? volumeInfo.imageLinks.thumbnail.replace('zoom=1','zoom=4') : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
    return (
      <div className={classes.root}>
      <main>
      <div className={classes.heroUnit} style={{backgroundColor: 'gainsboro'}}>
          <div className={classes.heroContent}>
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              { volumeInfo.title }
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              {(volumeInfo.subtitle) ? volumeInfo.subtitle : ''}
            </Typography>
          </div>
        </div>
      </main>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.card}>
              <CardMedia
              className={classes.media}
              image={imgLink}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {/* <BookTable data={volumeInfo} other={this.props.location.state}/> */}
          <BookInfoTab data={volumeInfo} other={this.props.location.state}/>
        </Grid>
      </Grid>
      <br />
      {
        (volumeInfo.description) ? <div><Typography variant="overline" align="center" color="textPrimary" paragraph>
                              {(volumeInfo.description) ? volumeInfo.description : ''}
                      </Typography></div> : ''
      }
    
    <Footer />
    </div>
    )
  }
}



Grids.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grids);