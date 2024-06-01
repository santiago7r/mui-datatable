
import { Box, Button, Modal, TextField } from "@mui/material"
import PropTypes from 'prop-types';
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Modals = ({ handleClose, open, action, currenEditingRow = [], labelOfButton = 'ADD POST' }) => {
  const [userIdFromEditing = null, idFromEditing = null, titleFromEditing = '', bodyFromEditing = ''] = currenEditingRow;
  const initialState = {
    userId: userIdFromEditing,
    id: idFromEditing,
    title: titleFromEditing,
    body: bodyFromEditing
  }
  console.log('initialState', initialState);
  const [newPost, setNewPost] = useState(initialState);

    return (
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              id="outlined-basic"
              value={newPost.userId}
              label="User ID" variant="outlined"
              onChange={(event) => setNewPost({...newPost, userId: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              value={newPost.id}
              label="ID" variant="outlined"
              onChange={(event) => setNewPost({...newPost, id: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              value={newPost.title}
              label="Title" variant="outlined"
              onChange={(event) => setNewPost({...newPost, title: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              value={newPost.body}
              label="Body" variant="outlined"
              onChange={(event) => setNewPost({...newPost, body: event.target.value})}
            />
            <Button onClick={() => action(newPost)}>{labelOfButton}</Button>
          </Box>
        </Modal>
      </div>
    )
}

Modals.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    action: PropTypes.func.isRequired,
    currenEditingRow: PropTypes.object,
    labelOfButton: PropTypes.string
}

export default Modals;