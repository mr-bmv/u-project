import { StateSchema } from '@/app/providers/StoreProvider';
import { Country, Currency } from '@/shared/const/common';

// мой вариант
const emptyProfile = {
  first: '',
  lastname: '',
  age: 22,
  currency: Currency.RUB,
  country: Country.Armenia,
  city: '',
  username: '',
  avatar: '',
};

export const getProfileData = (state: StateSchema) =>
  state.profile?.data || emptyProfile;
