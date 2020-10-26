export class LoginModel {
    public constructor(
        public Email?: string,
        public Password?: string,
        public confirmPassword?: string,
        public customer?: any,
        public secretCode?: string,
      ) {}
}
