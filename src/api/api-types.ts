
export type MaterialType = {
    type: string
    name: string
    material?: string
    unit: string
    width?: number
    price: number
}

export type ConfigType = {
	type: string
	key: string
	name: string
	min?: number
	max?: number
	step?: number
    value?: number
}
