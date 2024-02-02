import { ID, Query } from 'appwrite';
import { account, appwriteConfig, avatars, databases } from './appwriteConfig';

// SIGN UP

export const createAccount = async (user) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error();

    const avatarUrl = avatars.getInitials(user.name);

    const savedUser = await saveUserToDb({
      accountId: newAccount.$id,
      name: newAccount.name,
      username: user.username,
      email: newAccount.email,
      imageUrl: avatarUrl,
    });

    return savedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// SAVING USER TO DB

export const saveUserToDb = async (userInfo) => {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databasesId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      userInfo
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

// SIGN IN
export async function signInAccount(user) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}

// GET ACCOUNT
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

// GET USER
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databasesId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    console.log(currentUser);
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
