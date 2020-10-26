export class ContactModel {
  public constructor(
    public fullName?: string,
    public email?: string,
    public subject?: string,
    public message?: string,
  ) {}
}
