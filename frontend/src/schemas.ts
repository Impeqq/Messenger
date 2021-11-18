import { gql } from "@apollo/client";

export const FETCH_ME = gql`
  query me {
    me {
      id
      email
      firstName
      lastName
      avatar {
        id
      }
    }
  }
`;

export const FETCH_SEARCH_USERS = gql`
  query searchUsers($name: String!) {
    searchUser(name: $name) {
      id
      firstName
      lastName
      online
      avatar {
        id
      }
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
        online
        avatar {
          id
        }
      }
      messages {
        id
        createdAt
        read
        user_from {
          id
          firstName
          lastName
          avatar {
            id
          }
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
        online
        avatar {
          id
        }
      }
      messages {
        createdAt
        read
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

export const FETCH_NEW_USERS = gql`
  query getNewUsers {
    getNewUsers {
      id
      email
      firstName
      lastName
      online
      avatar {
        id
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($id: String!, $message: String!) {
    sendMessage(input: { chat_id: $id, message: $message }) {
      message
      createdAt
      read
      user_from {
        id
        firstName
        lastName
        online
        avatar {
          id
        }
      }
    }
  }
`;

export const UPDATE_MESSAGES_READ = gql`
  mutation setMessagesRead($ids: [String]!, $chat_id: String!) {
    setMessagesRead(message_ids: $ids, chat_id: $chat_id)
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

export const SEND_UPDATE = gql`
  mutation updateUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $avatar: Upload
  ) {
    updateUser(
      input: { firstName: $firstName, lastName: $lastName, email: $email }
      file: $avatar
    )
  }
`;

export const SEND_UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $password: String!
    $newPassword: String!
    $repeatedPassword: String!
  ) {
    updatePassword(
      input: {
        password: $password
        newPassword: $newPassword
        repeatedPassword: $repeatedPassword
      }
    )
  }
`;

export const SUBSCRIBE_MESSAGES_UPDATED = gql`
  subscription messagesUpdated($chat_id: String!) {
    messagesUpdated(chat_id: $chat_id) {
      chat_id
      message_ids
    }
  }
`;

export const SUBSCRIBE_CHAT = gql`
  subscription messageSent($chat_id: String) {
    messageSent(chat_id: $chat_id) {
      id
      message
      createdAt
      user_from {
        id
        firstName
        lastName
        avatar {
          id
        }
      }
    }
  }
`;

export const SUBSCRIBE_NEW_USER = gql`
  subscription userRegistred {
    userRegistred {
      id
      firstName
      lastName
      online
      avatar {
        id
      }
    }
  }
`;

export const SUBSCRIBE_ONLINE_USER = gql`
  subscription userOnline {
    userOnline {
      id
      online
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
        online
        avatar {
          id
        }
      }
      messages {
        createdAt
        user_from {
          id
          firstName
          lastName
        }
        message
        read
      }
    }
  }
`;
