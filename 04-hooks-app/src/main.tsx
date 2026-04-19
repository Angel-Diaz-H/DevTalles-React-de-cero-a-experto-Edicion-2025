import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import './index.css';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';
// import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { getUserAction } from './08-use-suspense/api/get-user.action';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
);
