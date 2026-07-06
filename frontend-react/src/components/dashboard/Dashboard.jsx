import axios from 'axios'
import { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'


import React from 'react'

const Dashboard = () => {
    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosInstance.get('/protected-view/')
                    console.log('Success: ', response.data);
            }
            catch (error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [])
  return (
    <div className='text-light  coontainer'>Dashboard</div>
  )
}

export default Dashboard