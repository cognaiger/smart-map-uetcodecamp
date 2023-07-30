import React from 'react';
import { Text } from '@chakra-ui/react';

const Hello = () => {
  const loggedIn = localStorage.getItem('loggedIn');

  if (loggedIn === 'true') {
    const studentID = localStorage.getItem('studentID');

    return (
      <Text fontSize="m" fontWeight="regular" mr={4}>
        Hello {studentID ? studentID : 'Guest'}
      </Text>
    );
  }

  return null;
};

export default Hello;
