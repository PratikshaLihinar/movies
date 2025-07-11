import AllRoutes from "./routes/AllRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {

  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
