import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { graphicActions } from "../store/graphic/graphic.slice";

const actions = {
  ...graphicActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
