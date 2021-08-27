import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminPage from './AdminPage';
import Restricted from './Restricted';

const AdminPanel = () => {

     const {currentUser} = useAuth();

     if(currentUser.email === 'amigodept@gmail.com'){
          return <AdminPage />
     }else {
          return <Restricted />
     }
}

export default AdminPanel;