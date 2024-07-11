import { useState } from 'react'

function App() {
  console.log(import.meta.env);
  const viteEnvName = import.meta.env.VITE_ENV_NAME;
  console.log(viteEnvName);

  return (
    <div>
      hello world
      <p>import.meta.env:{JSON.stringify(import.meta.env)}</p>
      <p>운영?개발? : {viteEnvName}</p>
    </div>
  )
}

export default App
