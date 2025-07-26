export interface JwtTokenPayload {
    sub: string;       // user id
    email: string;
    role: 'admin' | 'user';
    exp: number;       // expiration timestamp
  }
  