import "./errorPage.css"

/**
 * This error block will only appear if a user can not be found
 * current users : id=12 & id=18
 * @component used in Dashboard in case of a non-defined user
 */
const ErrorPage = () => {
    return (
      <div className='errorPage'>
        <i className="fa-solid fa-triangle-exclamation fa-5x"></i>
        <h1> Erreur </h1>
        <span> L'utilisateur demandé n'existe pas. </span>
      </div>
    )
  }
  
export default ErrorPage