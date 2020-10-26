export class CustomerModel {
    public constructor(
        public User_ID?: number,
        public First_Name ?: string,
        public Last_Name ?: string,
        public Email?: string,
        public Phone?: string,
        public Password?: string,
        public confirmPassword?: string,
      ) {}
}
