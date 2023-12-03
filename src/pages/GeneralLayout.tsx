import React from 'react';

function GeneralBody({ children }: { children: React.ReactNode }) {
  return <div className="w-100vw h-100vh">{children}</div>;
}

function GeneralLayout({ children }: { children: React.ReactNode }) {
  return <GeneralBody>{children}</GeneralBody>;
}

export default GeneralLayout;
