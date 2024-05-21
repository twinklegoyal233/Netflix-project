import { useRouteError } from "react-router-dom"

const Error = () => {

    const error = useRouteError();
    console.log(error);
  return (
    <div>
   
      <h1 className="font-bold text-2xl"  >{error.error.message}</h1>
      <h1 className="font-semibold"  >{ error.status  + " - " + error.statusText  }</h1>
    </div>
  )
}

export default Error
