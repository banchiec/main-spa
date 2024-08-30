import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { postCategories } from "../../api/categories"

export const useCategoriesCreate = () => {
	const navigate = useNavigate()
	const {mutationKey, mutationFn} = postCategories()
	const { mutate: createCategory } = useMutation({
		mutationKey: mutationKey,
		mutationFn: mutationFn,
		onSuccess: () => {
			navigate("/")
		},
		onError:(err: any) => {
			console.log(err)
		}
	})
	return { createCategory }
}
