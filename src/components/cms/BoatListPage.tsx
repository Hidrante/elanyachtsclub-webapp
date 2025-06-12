// En: src/components/cms/BoatListPage.tsx

import React from 'react';

// Por ahora, este componente será un placeholder.
// No necesita conectarse a Firestore para nuestro PMP de 48hs.

const BoatListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-brand-blue-dark mb-4">
          Boat Management System (CMS)
        </h2>
        <p className="text-gray-600 text-lg">
          Esta sección está en construcción. Aquí podrás gestionar tu flota de yates.
        </p>
        <p className="text-gray-500 mt-2">
          (PMP 48hs: ¡Enfocados en la página pública y captura de leads!)
        </p>
      </div>
    </div>
  );
};

export default BoatListPage;