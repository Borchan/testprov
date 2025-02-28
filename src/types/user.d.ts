export interface IUser {
    key: string
    name: string
    email: string
    registration: string
    status: boolean
    phone: string
    country: string
    activityHistory: IActivityRecord[]
}

type TAction = { type: string; color: string }

export interface IActivityRecord {
    id: string
    action: TAction
}

export type TSortField = 'name' | 'email' | null
export type TSortOrder = 'ascend' | 'descend' | null
export type TFilter = boolean[] | null
