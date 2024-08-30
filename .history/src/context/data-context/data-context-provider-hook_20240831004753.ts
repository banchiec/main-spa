import { useContext } from "react";
import { MasterDataContext } from "./data-context";

export default function useMasterData() {
	return useContext(MasterDataContext);
}