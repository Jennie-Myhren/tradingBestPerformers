import axios from 'axios';

const SET_TOP_THREE = 'SET_TOP_THREE';

export const setTopThree = securities => ({ type: SET_TOP_THREE, securities });

const initialState = [];

export const fetchTopThree = timePeriod => {
  return async dispatch => {
    try {
      //IDENTIFY TOP THREE PERFORMERS IN TIME PERIOD
      //FETCH THOSE 3 SECURITIES' STATS, USING ID
      // const { data } = await axios.get(`/securities/${id}/stats`);
      // dispatch(setTopThree(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const topThreeSecurities = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_THREE:
      return action.securities;
    default:
      return state;
  }
};

export default topThreeSecurities;
