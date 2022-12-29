const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER } = require('./settings');

const ErrorHandling = {
  errorMessage: {
    lottoNumber: {
      NOT_NATURAL_NUMBER: '[ERROR] 로또 번호는 자연수여야 합니다.',
      OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    },
  },

  throwError(isInvalid, message) {
    if (isInvalid) throw new Error(message);
  },

  validateMoney() {},

  validateLottoNumber(number) {
    const { NOT_NATURAL_NUMBER, OUT_OF_RANGE } = ErrorHandling.errorMessage.lottoNumber;

    const isNotNaturalNumber = !(/^\d+$/.test(number) && number);
    this.throwError(isNotNaturalNumber, NOT_NATURAL_NUMBER);

    const isOutOfRange = number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER;
    this.throwError(isOutOfRange, OUT_OF_RANGE);
  },

  validateBonusNumber(number) {
    ErrorHandling.validateLottoNumber(number);
  },
};

module.exports = ErrorHandling;
