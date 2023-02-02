import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { articleActions } from "../store/graphic/graphic.slice";

const actions = {
  ...articleActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
