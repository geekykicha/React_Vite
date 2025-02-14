import First from "./First"

function App() {
  // injecting var in react 
  const username = "krishna Mudhale"

  return (
    // return should be in one tag - empty tag <> </> (fragment)
    <>
    <First/>
    {/* we can't directly inject var only evaluated expression as {} */}
    <h1>React with vite | KM {username}</h1>
    </>
  )
}

export default App
