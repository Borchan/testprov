import { Footer } from 'antd/es/layout/layout'
const footerStyle = {
    textAlign: 'center',

    color: '#fff',
    height: 64,
    paddingInline: 48,

    backgroundColor: '#4096ff',
}
export const AppFooter = () => {
    return (
        <Footer style={footerStyle}>
            Provitech {new Date().getFullYear()} Test Task
        </Footer>
    )
}
