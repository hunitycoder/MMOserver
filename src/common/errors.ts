import { BadRequestException, HttpException } from '@nestjs/common';
export class PSMMOException extends BadRequestException {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class MinParticipantsRequiredException extends PSMMOException {
  constructor(message: string) {
    const _message =
      'Tournament will not start until the minimum number of confirmed participants is reached';
    super(`${_message}: ${message}`);
  }
}

export class UnscorableMatchException extends PSMMOException {
  constructor(message: string) {
    const _message = 'Match cannot be scored';
    super(`${_message}: ${message}`);
  }
}
