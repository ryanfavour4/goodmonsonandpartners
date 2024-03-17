import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Router";
import { RootStore } from "./store/context/RootStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";
import ScrollToTop from "./layout/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <RootStore>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Layout>
                    <ScrollToTop>
                        <Routers />
                    </ScrollToTop>
                </Layout>
            </RootStore>
        </BrowserRouter>
    );
}

export default App;
