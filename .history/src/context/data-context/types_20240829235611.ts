export interface CategoryTypes {
	name: string,
	description?: string,
	image: string
	available: boolean
	productType: any
}

export interface DataContextTypes {
  //  </
	categories: Array<CategoryTypes>
}