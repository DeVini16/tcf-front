import React, { useState, useEffect } from 'react';
import PopUp from './PopUp';

const Restaurantes = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  useEffect(() => {
    setOpenPopUp(true);
  }, []);

  return (
    <div>
      {openPopUp && <PopUp isOpen={true} />}
    </div>
  );
};

export default Restaurantes;
