export interface ProfileData {
  id: number;
  fullName: string;
  avatar: string;
  gender: number;
  dateOfBirth: string;
  role: number;
  preferences: number[];
}

export interface ThirdParty {
  thirdParty: -1 | 0 | 1 | 2 | 3;
  nameTelegram: string;
  nameMessenger: string;
}

export interface User extends ProfileData, ThirdParty {
  isLogin: boolean;
  username: string;
  password: string;
  token: string;
  status: number;
  createTime: number;
  response: {
    loading: boolean;
    login: {
      error: number;
      message: string;
      remember_password: boolean;
    };
    register: {
      error: number;
      message: string;
    };
    updateProfile: {
      error: number;
      message: string;
    };
    auth: {
      error: number;
      message: string;
    };
  };
  language: 'vi' | 'en';
  hasPreferences: number; // to check had preferences exists
  pathname: string;
}

export interface LoginData {
  username: string;
  password: string;
  remember_password: boolean;
}

export interface RequestUpdateProfile {
  fullName?: string;
  avatar?: string;
  gender?: number;
  dateOfBirth?: string;
}
