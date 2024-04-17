import { configureStore, createSlice } from '@reduxjs/toolkit';

// convert object to string and store in localStorage
/*function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }*/

const userSlice = createSlice({
  name: 'User',
  initialState: {
    value: []
  },
  reducers: {
    defineInitialList: (state, { payload }) => {
      console.log('definiendo la lista inicial')
      state.value = payload.map(u => {
        u.resolved = false;
        return u;
      })
      return state;
    },
    addUser: (state, { payload }) => {
      state.value.push(payload)
      return state;
    },
    removeUser: (state, { payload }) => {
      state.value = state.value.filter(u => u.id !== payload)
      return state;
    },
    changeFavorite: (state, { payload }) => {
      state.value = state.value.map(u => {
        if (u.id === payload.userId) {
          u.resolved = payload.favorite
        }

        return u;

      })
      return state;
    },
    /*DeleteFavorites:(state,{payload})=>{
     
 
       })*/

  }
})

export const { addUser, defineInitialList, removeUser, changeFavorite } = userSlice.actions

export const store = configureStore({
  reducer: userSlice.reducer,
  // preloadedState: loadFromLocalStorage()
});

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
//store.subscribe(() => saveToLocalStorage(store.getState()));
