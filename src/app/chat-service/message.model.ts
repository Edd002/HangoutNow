import { User } from '../auth-service/user.model';

export interface Message {
    user: User;
    content: string;
    type: string;
    date: Date;
}