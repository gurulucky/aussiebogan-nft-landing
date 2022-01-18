import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// material
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
// ----------------------------------------------------------------------
import { setAlert } from 'src/actions/manager';

export default function AlertDialog() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.manager.alertOpen);
    const text = useSelector(state => state.manager.alertText);

    const handleClose = () => {
        dispatch(setAlert(false));
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>Use Google's location service?</DialogTitle> */}
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{color:'white', fontSize:'18px'}}>
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
