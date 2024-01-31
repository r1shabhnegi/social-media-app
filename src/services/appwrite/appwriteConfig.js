import { Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1'); // Your API Endpoint
client.setProject('<PROJECT_ID>'); // Your project ID

const account = new Account(client);

const promise = account.createEmailSession('email@example.com', 'password');

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
