import React from 'react'
import Title from '../Title/Title'
import { Table, TableCell, TableHead, TableRow } from '@mui/material'

const Orders = () => {
  return (
    <React.Fragment>
        <Title>Recent Orders</Title>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Ship To</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    </React.Fragment>
  )
}

export default Orders