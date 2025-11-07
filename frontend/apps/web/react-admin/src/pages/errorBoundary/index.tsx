import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorBoundary() {
    const error = useRouteError()

    if(isRouteErrorResponse(error)) {
        return <div>
            <h1>Oops! An error occurred.</h1>
            <p>{error.status} {error.statusText}</p>
            <p>{error.data}</p>
        </div>
    }else if(error instanceof Error) {
        return <div>
            <h1>Oops! Error</h1>
            <p>{error.message}</p>
            <p>{error.stack}</p>
        </div>
    }else {
        return <div>
            <h1>Oops! An error occurred.</h1>
        </div>
    }
}