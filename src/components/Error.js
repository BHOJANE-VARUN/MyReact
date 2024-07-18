import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const e = useRouteError();
    console.log(e);
    return (
        <div>
            <h1>Oops....!Error</h1>
            <h2>{e.data}</h2>
            <h2>Error Code:{e.status}</h2>
        </div>
    )
}
export default Error;