import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import  useGlobalReducer  from "../hooks/useGlobalReducer"
import { getCharacters, getPlanets, getVehicles } from "../services/APIservices"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const {store, dispatch} = useGlobalReducer()

    useEffect(() => {
        getCharacters(dispatch)
    }, [])

    useEffect(() => {
        getPlanets(dispatch)
    }, [])

    useEffect(() => {
        getVehicles(dispatch)
    }, [])
    
    return (
        <ScrollToTop>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ScrollToTop>
    );
}