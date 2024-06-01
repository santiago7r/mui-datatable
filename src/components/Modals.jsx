
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

const Modals = ({ handleClose, open, addPost }) => {
  const [newPost, setNewPost] = useState({
    userId: null,
    id: null,
    title: '',
    body: ''
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
              id="outlined-basic"
              label="User ID" variant="outlined"
              onChange={(event) => setNewPost({...newPost, userId: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              label="ID" variant="outlined"
              onChange={(event) => setNewPost({...newPost, id: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              label="Title" variant="outlined"
              onChange={(event) => setNewPost({...newPost, title: event.target.value})}
            />
            <TextField
              id="outlined-basic"
              label="Body" variant="outlined"
              onChange={(event) => setNewPost({...newPost, body: event.target.value})}
            />
            <Button onClick={() => addPost(newPost)}>Add Post</Button>
          </Box>
        </Modal>
      </div>
    )
}

Modals.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    addPost: PropTypes.func.isRequired
}

export default Modals;