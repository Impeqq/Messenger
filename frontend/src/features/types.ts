export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  message?: string;
};

export type TChat = {
  id: string;
  messages: [
    {
      createdAt: string;
      message: string;
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

export type RouteParams = {
  id: string;
};
