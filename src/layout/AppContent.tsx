import { Content } from 'antd/es/layout/layout'
import UsersTable from '../components/UsersTable'
import UserModal from '../components/UserModal'
import { observer } from 'mobx-react-lite'
import { userStore } from '../store/UserStore'
import { Alert } from 'antd'

export const AppContent = observer(() => {
    return (
        <Content
            style={{
                padding: '48px',
            }}
        >
            <div
                style={{
                    background: '#ffffff',
                    minHeight: 280,
                    padding: 24,
                    borderRadius: 10,
                }}
            >
                {userStore.error ? (
                    <Alert
                        message="Error"
                        description="Data loading error"
                        type="error"
                        showIcon
                    />
                ) : (
                    <UsersTable />
                )}

                <UserModal />
            </div>
        </Content>
    )
})
