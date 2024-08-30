export interface ProductTypes {
	name: string
	description?: string
	image: string
}

export interface CategoryTypes {
	name: string,
	description?: string,
	image: string
	available: boolean
	productType: Array<ProductTypes>
}

export interface DataContextTypes {
	categories: Array<CategoryTypes>
}