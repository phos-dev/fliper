import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    componentDidMount() {
      (this.props.status === '') ? this.setState({open: false}) : this.setState({open: true});
    }
    handleClose = () => {
      this.setState({open: false})
    }
    handleOpen = () => {
      this.setState({open: true})
    }
    render() {
        const {status} = this.props;
        let open =  (status === '') ? false : true;
        console.log(status, open);
        return (
            <div>
              <Dialog
                open={open}
                onClose={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Login Status"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {(status === 'Success') ? 'Success' : 'Ooops... Login Failed'}
                  </DialogContentText>
                </DialogContent>
                {
                  (status === 'Fail') 
                  ? 
                  (
                  <DialogActions>
                    <Button onClick={false} color="primary">
                      Register
                    </Button>
                    <Button onClick={false} color="primary" autoFocus>
                      Try Again
                    </Button>
                  </DialogActions>
                  )
                  : 'Success'
                }
              </Dialog>
            </div>
          );
    }
}

export default AlertDialog;