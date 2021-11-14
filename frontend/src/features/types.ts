export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
  avatar?: {
    filename: string;
    data: Buffer;
    id: string;
  };
};

export type TChat = {
  id: string;
  messages: [
    {
      createdAt: string;
      message: string;
      read: boolean;
      user_from: {
        firstName: string;
        id: string;
        lastName: string;
      };
    }
  ];
  users: [
    {
      firstName: string;
      id: string;
      lastName: string;
    }
  ];
};

export type TMessage = {
  id: string;
  createdAt: string;
  read: boolean;
  user_from: {
    id: string;
    firstName: string;
    lastName: string;
  };
  message: string;
};

export type RouteParams = {
  id: string;
};
