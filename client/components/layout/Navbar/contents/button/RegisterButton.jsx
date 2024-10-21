import React, { useMemo } from 'react';
import { Button } from '@mui/material';

const RegisterButton = () => {
  const style = useMemo(
    () => ({
      color: '#808080',
      marginTop: '8px',
    }),
    [],
  );
  return (
    <>
      <Button style={style} type="submit" variant="text">
        Sign up
      </Button>
    </>
  );
};

export default RegisterButton;
