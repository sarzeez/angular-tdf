export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public timePreference: string,
    public address: {
      street: string;
      city: string;
    },
    public subscribe: boolean
  ) {}
}
