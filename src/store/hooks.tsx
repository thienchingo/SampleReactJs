import { useContext } from "react";
import ApplicationContext from "./ApplicationContext";

export const useStore = () => {
    const {state, dispatch} = useContext(ApplicationContext);
    return {state, dispatch}
}