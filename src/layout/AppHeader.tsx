import { Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'

const headerStyle = {
    textAlign: 'center',

    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
}

export const AppHeader = () => {
    return (
        <Header style={headerStyle}>
            <Title style={{ color: '#f5f5f5' }}>User List</Title>
        </Header>
    )
}
