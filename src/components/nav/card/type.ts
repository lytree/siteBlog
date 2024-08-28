export interface NavGroup {
    icon: string
    title: string
    items: NavItem[]
}

export interface NavItem {
    icon: string
    url: string
    content: string
}