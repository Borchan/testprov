import { Layout, Spin } from 'antd'
import { AppHeader } from './AppHeader'
import { AppContent } from './AppContent'
import { AppFooter } from './AppFooter'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { userStore } from '../store/UserStore'

const AppLayout = observer(() => {
    useEffect(() => {
        userStore.fetchUsers()
    }, [])
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    )
})
export default AppLayout
