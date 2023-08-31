import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import thunk from 'redux-thunk';

import Rocketslice from './rockets/RocketsSlice';
import MissionSice from './Mission/MissionSice';

const rootReducers = combineReducers({
  rockets: Rocketslice,
  mission: MissionSice,
});

const mainStores = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const makeStore = () => {
  //  Check to confirm if we are on client side to persist,
  // because we don't need to persist on server side
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return mainStores;
  }

  // We need to persist on client side
  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducers);

  const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  // eslint-disable-next-line no-underscore-dangle
  Store._persistor = persistStore(Store);

  return Store;
};

const store = makeStore();

export default store;
