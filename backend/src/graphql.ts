
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface SendMessageInput {
    chat_id: string;
    message: string;
}

export interface SignUpInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface SignInInput {
    email: string;
    password: string;
}

export interface Chat {
    id: string;
    users?: User[];
    messages?: Message[];
    createdAt: string;
}

export interface IQuery {
    getChat(id?: string, offset?: number, limit?: number): Chat | Promise<Chat>;
    getMyChats(): Chat[] | Promise<Chat[]>;
    me(): User | Promise<User>;
    getNewUsers(): User[] | Promise<User[]>;
    searchUser(name?: string): User[] | Promise<User[]>;
}

export interface IMutation {
    createChat(user_to?: string): Chat | Promise<Chat>;
    setMessagesRead(message_ids?: string[], chat_id?: string): boolean | Promise<boolean>;
    sendMessage(input?: SendMessageInput): Message | Promise<Message>;
    signUp(input?: SignUpInput): string | Promise<string>;
    signIn(input?: SignInInput): string | Promise<string>;
}

export interface ISubscription {
    chatUpdated(user_id?: string): Chat | Promise<Chat>;
    messageSent(chat_id?: string): Message | Promise<Message>;
    messagesUpdated(chat_id?: string): MessageUpdates | Promise<MessageUpdates>;
    userRegistred(): User | Promise<User>;
}

export interface Message {
    id?: string;
    message?: string;
    read?: boolean;
    chat?: Chat;
    user_from?: User;
    createdAt?: string;
}

export interface MessageUpdates {
    chat_id?: string;
    message_ids?: string[];
}

export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: string;
}
