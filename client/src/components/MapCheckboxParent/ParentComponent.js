import React, { useState } from 'react';
import MenuIcon from './MenuIcon';
import Map from './Map';

const ParentComponent = () => {
  const [mapReload, setMapReload] = useState(false);

  const handleCheckboxChange = () => {
    // This function will be called when a checkbox is clicked in the MenuIcon component
    // Update the state to trigger a re-render of the Map component
    setMapReload((prevReload) => !prevReload);
  };

  return (
    <div>
      <MenuIcon onCheckboxChange={handleCheckboxChange} />
      <Map reload={mapReload} />
    </div>
  );
};

export default ParentComponent;
