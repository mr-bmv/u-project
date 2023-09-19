import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
  // всего лишь пример взаимодействия селекторов. можно было обойтись без getCounter
  getCounter,
  (counter: CounterSchema) => counter.value
);
