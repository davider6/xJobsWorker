export class PasswordResetRequest {
    email: string;
    entity: string;

    constructor(email: string) {
      this.email = email;
      this.entity = 'W';
    }
}
