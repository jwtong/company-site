export interface Technology {
  title: string
  icon: { component: any; color: string }
  type: string
  description: string
  alternatives: string
  companiesUsing: Array<any>
}

export interface Role {
  title: string
  icon: any
  text: string
}
