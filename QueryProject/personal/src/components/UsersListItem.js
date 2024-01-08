import React from 'react';
import AlbumList from './AlbumList';
import ExpandablePanel from './ExpandablePanel';

import { useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';
import { GoTrash } from 'react-icons/go';

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();
  debugger;

  const handleClick = () => {
    debugger;
    removeUser(user);
  };

  const header = (
    <>
      <button
        style={{ marginRight: '30px', border: 'none', cursor: 'pointer' }}
        onClick={handleClick}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: '20px', height: '20px' }} />
        ) : (
          <GoTrash />
        )}
      </button>
      {user.name}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;
