import { useRouteError } from "react-router-dom";

function Error(){

const err = useRouteError();
console.log(err);

    return(
        <>
        <h1>Hey You Are In Wrong Page</h1>
        <h1>{err.status} {err.data}</h1>
        </>
    )
}

export default Error;