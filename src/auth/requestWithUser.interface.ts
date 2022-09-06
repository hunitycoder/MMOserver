import { Request } from 'express';
import { Users } from "@api/models/users";

interface RequestWithUser extends Request {
  user: Users;
}

export default RequestWithUser;