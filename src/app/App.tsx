import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {LoadingSpinner} from "../f_shared/LoadingSpinner";

function App() {
    return (
        <div className={"content"}>
            <Suspense fallback={<LoadingSpinner/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default App
