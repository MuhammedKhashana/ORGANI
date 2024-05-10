// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box } from '@radix-ui/themes'
import MainTasks from '../components/mainTasks'

export default function Home() {
    return (
        <div>
            <Box pt="3">
                <MainTasks />
            </Box>
        </div>
    )
}
