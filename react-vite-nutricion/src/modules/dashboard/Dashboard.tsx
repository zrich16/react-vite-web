import { useState } from 'react'
import { saveToken } from '../../utils/storage'
import ScreenBlock from '../../components/ui/ScreenBlock'
import Swal from 'sweetalert2'

import { useAuth } from "../../context/AuthContext";
const Dashboard = () => {

    const { data, token } = useAuth();
     return (
    <>      <p>Bienvenido {data?.nombre}</p> </>
      )
}

export default Dashboard