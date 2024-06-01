
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

const Modals = ({
    handleClose,
    open,
    action,
    currenEditingRow = [],
    labelOfButton = 'ADD POST',
    allDisabled = false,
    showLabel = true
  }) => {
  const [userIdFromEditing = null, idFromEditing = null, titleFromEditing = '', bodyFromEditing = ''] = currenEditingRow;
  const [newPost, setNewPost] = useState({
    userId: userIdFromEditing,
    id: idFromEditing,
    title: titleFromEditing,
    body: bodyFromEditing
  });

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
              disabled={allDisabled}
              fullWidth
              id="outlined-basic"
              label="User ID"
              margin="normal"
              onChange={(event) => setNewPost({...newPost, userId: event.target.value})}
              value={newPost.userId}
              variant="outlined"
            />
            <TextField
              disabled={allDisabled}
              fullWidth
              id="outlined-basic"
              label="ID"
              margin="normal"
              onChange={(event) => setNewPost({...newPost, id: event.target.value})}
              value={newPost.id}
              variant="outlined"
            />
            <TextField
              disabled={allDisabled}
              fullWidth
              id="outlined-basic"
              label="Title"
              margin="normal"
              onChange={(event) => setNewPost({...newPost, title: event.target.value})}
              value={newPost.title}
              variant="outlined"
            />
            <TextField
              disabled={allDisabled}
              id="outlined-basic"
              fullWidth
              label="Body"
              margin="normal"
              multiline
              onChange={(event) => setNewPost({...newPost, body: event.target.value})}
              rows={4}
              value={newPost.body}
              variant="outlined"
            />
            { showLabel && <Button onClick={() => action(newPost)}>{labelOfButton}</Button> }
          </Box>
        </Modal>
      </div>
    )
}

Modals.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    action: PropTypes.func,
    currenEditingRow: PropTypes.object,
    labelOfButton: PropTypes.string,
    allDisabled: PropTypes.bool.isRequired,
    showLabel: PropTypes.bool.isRequired
}

export default Modals;