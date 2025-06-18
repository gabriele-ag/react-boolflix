import { UseContent } from "./contexts/GlobalContext.jsx"
import Header from "./components/AppHeader"
import Main from "./components/AppMain"
import Footer from "./components/AppFooter.jsx"

function App() {

  return (
    <>
      <UseContent>
        <Header/>
        <Main/>
        <Footer/>
      </UseContent>
    </>
  )
}

export default App
