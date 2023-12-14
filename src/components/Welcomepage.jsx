import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './Main.css'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-router-dom'
import Layout from '../components/Layout';
import Sidebar from './Sidebar';

const Welcomepage = () => {
  return (
    <div>

     <Layout>
      <Sidebar/>
     </Layout>

    </div>
  )
}

export default Welcomepage