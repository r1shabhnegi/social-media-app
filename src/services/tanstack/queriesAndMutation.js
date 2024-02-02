import { useMutation } from '@tanstack/react-query';
import { createAccount, signInAccount } from '../appwrite/api';

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: (user) => createAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user) => signInAccount(user),
  });
};
