import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary'; 
}

const Button: React.FC<CustomButtonProps> = ({ variant = 'primary', ...props }) => {
  return (
    <AntButton
      className={`custom-button ${variant}`}
      {...props}
    />
  );
};

export default Button;
