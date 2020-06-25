import React, { useState, useEffect } from 'react';

export const EffectDemo = () => {
  // State
  const [fullName, setFullName] = useState({
    name: 'name',
    familyName: 'family',
  });
  const [title, setTitle] = useState({ title: 'useEffect()' });

  // useEffect
  useEffect(() => {
    setTitle({ title: 'Lord' });
    setFullName({ name: 'Rumpus', familyName: 'Pumblum' });
  }, []);

  return (
    <div>
      <h1>Title: {title.title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
};
