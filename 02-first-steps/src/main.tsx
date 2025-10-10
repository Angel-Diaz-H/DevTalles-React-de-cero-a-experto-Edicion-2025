import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp';
// import { MyAwesomeApp } from './MyAwesomeApp';

// Elemento root para agregarlo al index.html
createRoot(document.getElementById('root')!).render(
  // Recomendación para trabajar con React profesionalmente.
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp/> */}
  </StrictMode>,
);