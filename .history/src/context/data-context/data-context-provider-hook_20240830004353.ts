import { useContext } from "react";
import { DataContext } from "./data-context";

export default function useMasterData() {
	return useContext(DataContext);

}