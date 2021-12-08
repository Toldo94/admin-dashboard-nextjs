import { useEffect, useState } from 'react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import css from './user-details.module.scss';

import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const router = useRouter();
  const { uid } = router.query;

  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`);
      const data = await res.json();
      setUser({...data});
    }
    fetchData();
  }, [uid, setUser]);

  return (
    <DashboardLayout>
      <div className={css.userDetails}>
         
         <h2>{user.name}</h2>
         <h2>{user.username}</h2>
         <h2>{user.email}</h2>
         <h2>{user.website}</h2>
         <h2>{user.phone}</h2>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
