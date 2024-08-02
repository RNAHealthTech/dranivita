// Map.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const ClientSideMap = dynamic(() => import('./ClientSideMap'), { ssr: false });

const Map: React.FC = () => {
  return <ClientSideMap />;
};

export default Map;