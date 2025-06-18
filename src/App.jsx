import { UseContent } from "./contexts/GlobalContext.jsx"
import Header from "./components/AppHeader"
import Main from "./components/AppMain"

function App() {

  return (
    <>
      <UseContent>
        <Header/>
        <Main/>
      </UseContent>
    </>
  )
}

export default App
