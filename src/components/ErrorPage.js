import React, {useEffect} from 'react'

const ErrorPage = () => {
  
  useEffect(() => {
    console.log("Call ErrorPage");
  }, []);


  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage