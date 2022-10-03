export interface UserContextProps {
  login: (user: string, password: string) => void;
  logout: () => void;
}