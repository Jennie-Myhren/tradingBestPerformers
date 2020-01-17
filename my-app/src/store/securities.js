import axios from 'axios';

const SET_SECURITIES = 'SET_SECURITIES';

export const setSecurities = securities => ({
  type: SET_SECURITIES,
  securities,
});

const initialState = [];

export const fetchAllSecurities = timePeriod => {
  return async dispatch => {
    try {
      //SHOULD FETCH PROVIDED TIME PERIOD
      const { data } = await axios.get('/securities');
      dispatch(setSecurities(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const allSecurities = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECURITIES:
      //returns array of ALL securities, provided a given time period
      return action.securities;
    default:
      return state;
  }
};

export default allSecurities;
