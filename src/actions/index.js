import * as api from "../api/index";

export const addCat = (catData) => async (dispatch) => {
  try {
    const { data } = await api.postCat(catData);
    dispatch({ type: "ADD_CAT", payload: data });
    dispatch(activateCat({ _id: data._id }));
    dispatch(fetchAllCats());
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCats = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCats();
    dispatch({ type: "FETCH_ALL_CATS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const activateCat = (activeData) => async (dispatch) => {
  try {
    const { _id } = activeData;
    const { data } = await api.activateCat(_id);
    dispatch({ type: "ACTIVATE_CAT", payload: data });
    dispatch(fetchAllCats());
  } catch (error) {
    console.log(error);
  }
};

export const incrementClicks = (activeData) => async (dispatch) => {
  try {
    const { _id, catClicks } = activeData;
    const { data } = await api.incrementClicks(_id, catClicks);
    dispatch({ type: "CLICK_CAT", payload: data });
    dispatch(fetchAllCats());
  } catch (error) {
    console.log(error);
  }
};

export const updateCat = (_id, oldData) => async (dispatch) => {
  try {
    const { data } = await api.updateCat(_id, oldData);
    console.log(data);
    dispatch({ type: "UPDATE_CAT", payload: data });
    dispatch(fetchAllCats());
  } catch (error) {
    console.log(error);
  }
};
