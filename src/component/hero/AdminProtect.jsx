import {Outlet} from 'react-router-dom'
import NotAuth from '../../Pages/NotAuth'
const AdminProtect = ({role}) => {
 return(
    role.role==="admin"?<Outlet />:<NotAuth />
 )
}

export default AdminProtect