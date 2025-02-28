import { Table, Tag } from 'antd'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../store/UserStore'
import type { TableColumnsType } from 'antd'
import { IUser } from '../../types/user'

const columns: TableColumnsType<IUser> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
    },
    {
        title: 'Registration',
        dataIndex: 'registration',
        key: 'registration',
        sorter: true,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: boolean) => (
            <Tag color={status ? 'green' : 'red'}>
                {status ? 'Active' : 'Inactive'}
            </Tag>
        ),
        filters: [
            {
                text: 'Active',
                value: true,
            },
            {
                text: 'Inactive',
                value: false,
            },
        ],
    },
]

const onChange = (pagination: any, filters: any, sorter: any) => {
    userStore.setFilter(filters.status)
    userStore.setSort(sorter.field, sorter.order)
}

const UsersTable: React.FC = observer(() => {
    return (
        <Table
            columns={columns}
            dataSource={userStore.filteredAndSortedUsers}
            loading={userStore.loading}
            onChange={onChange}
            showSorterTooltip={{
                target: 'sorter-icon',
            }}
            onRow={(record) => ({
                onClick: () => userStore.setSelectedUser(record),
            })}
        />
    )
})
export default UsersTable
