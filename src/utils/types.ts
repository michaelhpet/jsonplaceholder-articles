export type UserType = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export type PostType = {
  id: string;
  title: string;
  body: string;
  user: UserType;
};
