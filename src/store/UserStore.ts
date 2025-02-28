import { makeAutoObservable } from 'mobx'
import { IUser, TFilter, TSortField, TSortOrder } from '../types/user'
import { fakeUsers } from '../api/FakeApi'

class UserStore {
    users: IUser[] = []
    error: boolean = false
    loading: boolean = false
    sortField: TSortField = null
    sortOrder: TSortOrder = null
    filters: TFilter = null
    selectedUser: IUser | null = null

    constructor() {
        makeAutoObservable(this)
    }
    async fetchUsers() {
        this.error = false
        this.loading = true
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            this.users = fakeUsers(20)
        } catch {
            this.error = true
        } finally {
            this.loading = false
        }
    }
    setSort(field: TSortField, order: TSortOrder) {
        this.sortField = field
        this.sortOrder = order
    }
    setFilter(filters: TFilter) {
        this.filters = filters
    }
    setSelectedUser(user: IUser | null) {
        this.selectedUser = user
    }
    get filteredAndSortedUsers() {
        let result = [...this.users]

        if (this.filters !== null) {
            result = result.filter((user: IUser) =>
                this.filters?.includes(user.status)
            )
        }
        if (this.sortField && this.sortOrder) {
            result = result.sort((a: IUser, b: IUser) => {
                const aField = a[this.sortField!]
                const bField = b[this.sortField!]
                if (this.sortOrder == 'ascend') {
                    return aField > bField ? 1 : -1
                } else return aField > bField ? -1 : 1
            })
        }
        return result
    }
}

export const userStore = new UserStore()
