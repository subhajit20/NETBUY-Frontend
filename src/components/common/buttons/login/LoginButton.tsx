import { NavLink } from 'react-router-dom';
import './loginbtn.css'
type Props = {
    btnName: string;
    to:string;
}

function LoginButton({ btnName, to }: Props) {
  return (
    <NavLink to={to}>
       <button> <span className="button_top text-xs">{btnName}</span></button>
    </NavLink>

  )
}

export default LoginButton