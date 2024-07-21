import React from 'react';
import { Modal, Backdrop, Fade, TextField, Button, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from './axios';

const ModalContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

const FormField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const ReferralModal = ({ open, handleClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    handleClose(); // Close the modal immediately after clicking submit
    try {
      const response = await axios.post('/referrals', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
      // Optionally, handle the error (e.g., show a notification or reopen the modal)
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <h2>Refer a Course</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              label="Referrer's Name"
              {...register('referrerName', { required: true })}
              fullWidth
              error={!!errors.referrerName}
              helperText={errors.referrerName ? "Referrer's name is required" : ''}
            />
            <FormField
              label="Referrer's Email"
              {...register('referrerEmail', { required: true })}
              fullWidth
              error={!!errors.referrerEmail}
              helperText={errors.referrerEmail ? "Referrer's email is required" : ''}
            />
            <FormField
              label="Referee's Code"
              {...register('refereeCode', { required: true })}
              fullWidth
              error={!!errors.refereeCode}
              helperText={errors.refereeCode ? "Referee's code is required" : ''}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

export default ReferralModal;
