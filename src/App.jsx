import Header from "./components/Header"
import MainContent from "./components/MainContent"
import data from "./data"
import "./index.css"


function App() {

  const contentJsx=data.map(travel=> <MainContent key={travel.title} travel={travel} />)

  return(
    <>
      <Header />
      <div className="list">
          {contentJsx}
      </div>
    </>
  )
}

export default App
