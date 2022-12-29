const { LOTTO_LENGTH, SEPARATOR } = require('./settings');
const { throwError, validateLottoNumber } = require('./ErrorHandling');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const isLengthInvalid = numbers.length !== LOTTO_LENGTH;
    throwError(isLengthInvalid, '[ERROR] 로또 번호는 6개여야 합니다.');

    numbers.forEach((number) => {
      validateLottoNumber(number);
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
