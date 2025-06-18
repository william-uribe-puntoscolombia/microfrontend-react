import { Helmet } from '@modern-js/runtime/head';
import { Users } from 'mfe/Users';
import React, { useState, Suspense } from 'react';

const Index = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Usuarios</title>
      </Helmet>

      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </>
  );
};

export default Index;
