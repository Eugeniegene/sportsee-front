import "./errorPage.css"

const ErrorPage = () => {
    return (
      <div className='errorPage'>
        <i class="fa-solid fa-triangle-exclamation fa-5x"></i>
        <h1> Erreur </h1>
        <span> L'utilisateur demandé n'existe pas. </span>
      </div>
    )
  }
  
export default ErrorPage