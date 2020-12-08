import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';

function User({ userId }) {
  useEffect(() => {
    const onChildAdd = database()
      .ref('/users')
      .on('child_added', snapshot => {
        console.log('A new node has been added', snapshot.val());
      });

    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref('/users')
        .off('child_added', onChildAdd);
  }, [userId]);
}
