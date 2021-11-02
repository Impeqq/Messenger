
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
    myMessages(): Message[] | Promise<Message[]>;
    searchUser(name?: string): User[] | Promise<User[]>;
}

export interface IMutation {
    createChat(user_to?: string): Chat | Promise<Chat>;
    sendMessage(input?: SendMessageInput): Message | Promise<Message>;
    signUp(input?: SignUpInput): string | Promise<string>;
    signIn(input?: SignInInput): string | Promise<string>;
}

export interface ISubscription {
    chatUpdated(user_id?: string): Chat | Promise<Chat>;
    messageSent(chat_id?: string): Message | Promise<Message>;
}

export interface Message {
    id?: string;
    message?: string;
    chat?: Chat;
    user_from?: User;
    createdAt?: string;
}

export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
