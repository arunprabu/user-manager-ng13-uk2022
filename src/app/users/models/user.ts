interface IUser{
  id: number;
  name: string;
  phone: string;
  email: string;
}

// here's model
export class User implements IUser {
  id: number = 0;
  name: string = '';
  phone: string = '';
  email: string = '';
}
