import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div className="text-center">
      <button type="button" onClick={onButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
