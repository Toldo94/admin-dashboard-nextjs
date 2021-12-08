import DashboardLayout from '../../layouts/DashboardLayout';

import css from './user-list.module.scss';

import UserListContainer from '../../components/userListContainer/UserListContainer';

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className={css.userList}>
        <UserListContainer />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
