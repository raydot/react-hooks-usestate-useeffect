import React, { useState } from 'react';

export const EffectDemo = () => {
  // State
  const [fullName, setFullName] = useState({
    name: 'name',
    familyName: 'family',
  });
  const [title, setTitle] = useState('useEffect() in hooks');

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
