import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
  const {name}=useContext(AuthContext)
  console.log(name);
  return (
    <div>
      register
    </div>
  );
}

export default Register;
