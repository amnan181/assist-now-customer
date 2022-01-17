export type UserModel = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: null | number;
  profile: {
    id: number;
    profilePhoto: string;
    bio: string;
    user: number;
  };
};

export type UserReducerState = {
  user: null | UserModel;
};

export type AppReducerState = {
  isDarkTheme: boolean;
};

export type UserLoginActionParam = {
  email: string;
  password: string;
};

export type UseForgotPasswordActionParam = {
  email: string;
};

export type UserRegisterActionParam = {
  email: string;
  password1: string;
  password2: string;
};

export type HeaderPropsTypes = {
  isPaid: number;
};

export type CurrentUserDetailsHookReturnType = {
  isLogin: boolean;
  loading: boolean;
  user: null | UserModel;
  logout: () => void;
};

export type UserLoginHookReturnType = {
  loading: boolean;
  email: string;
  password: string;
  onSubmit: () => void;
  onChangePasswordValue: (password: string) => void;
  onChangeEmailText: (email: string) => void;
};

export type UserRegisterHookReturnType = UserLoginHookReturnType & {
  name: string;
  password1: string;
  onChangePasswordValue: (password: string) => void;
  onChangePassword1Value: (password1: string) => void;
  onChangeNameText: (name: string) => void;
  onChangeEmailText: (email: string) => void;
};
