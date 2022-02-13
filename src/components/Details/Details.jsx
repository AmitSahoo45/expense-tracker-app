import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import useTransactions from '../../useTransactions'

import useStyles from './style'

const Details = ({ title }) => {
    const classes = useStyles();

    const { total, chartData } = useTransactions(title)
    return (
        <Card
            className={title === 'Income' ? classes.income : classes.expense}
        >
            <CardHeader
                title={title}
            />
            <CardContent>
                <Typography variant="h5">
                    Rs{
                        total
                    }
                </Typography>
                <Chart
                    type='doughnut'
                    data={chartData}
                />
            </CardContent>
        </Card>
    )
}

export default Details
