import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Resgister from "./pages/Resgister";
import { AuthProvider } from "./context/auth";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";



function App() {
  

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={
        <PrivateRoutes>
          <Home />
        </PrivateRoutes>
       } />
      <Route path="/login" element={
      <PublicRoutes>
        <Login />
      </PublicRoutes> } />
      <Route path="/register" element={<Resgister />} />
    </Routes>
    </AuthProvider>
    
  )
}

export default App;
