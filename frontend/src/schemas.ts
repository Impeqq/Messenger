import { gql } from "@apollo/client";

export const FETCH_ME = gql`
  query {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

export const FETCH_SEARCH_USERS = gql`
  query searchUsers($name: String!) {
    searchUser(name: $name) {
      id
      firstName
      lastName
    }
  }
`;

export const FETCH_CHAT = gql`
  query getChat($id: String!, $offset: Int!) {
    getChat(id: $id, limit: 10, offset: $offset) {
      id
      users {
        id
        firstName
        lastName
      }
      messages {
        createdAt
        user_from {
          id
          firstName
          lastName
        }
        message
      }
    }
  }
`;

export const FETCH_MY_CHATS = gql`
  query getMyChats {
    getMyChats {
      id
      users {
        id
        firstName
        lastName
      }
      messages {
        createdAt
        user_from {
          id
          firstName
          lastName
        }
        message
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($chat: String!, $message: String!) {
    sendMessage(input: { chat_id: $chat, message: $message }) {
      message
      createdAt
      user_from {
        id
        firstName
        lastName
      }
    }
  }
`;

export const SEND_CREATE_CHAT = gql`
  mutation createChat($user_to: String!) {
    createChat(user_to: $user_to) {
      id
    }
  }
`;

export const SEND_LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password })
  }
`;

export const SEND_REGISTER = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signUp(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    )
  }
`;

export const SUBSCRIBE_CHAT = gql`
  subscription messageSent($chatId: String) {
    messageSent(chatId: $chatId) {
      id
      message
      createdAt
      user_from {
        id
        firstName
        lastName
      }
    }
  }
`;

export const SUBSCRIBE_MY_CHAT = gql`
  subscription chatUpdated($user_id: String) {
    chatUpdated(user_id: $user_id) {
      id
      users {
        id
        firstName
        lastName
      }
      messages {
        createdAt
        user_from {
          id
          firstName
          lastName
        }
        message
      }
    }
  }
`;
