const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  message: {
    PURCHASE: '구입금액을 입력해 주세요.\n',
    WINNING: '\n당첨 번호를 입력해 주세요.\n',
    BONUS: '\n보너스 번호를 입력해 주세요.\n',
  },

  readInput(message, callback, validate) {
    Console.readLine(message, (input) => {
      validate(input);
      callback(input);
    });
  },

  readPurchaseAmount(callback) {
    InputView.readInput(InputView.message.PURCHASE, callback);
  },

  readWinningNumbers(callback) {
    InputView.readInput(InputView.message.WINNING, callback);
  },

  readBonusNumber(callback) {
    InputView.readInput(InputView.message.BONUS, callback);
  },
};

module.exports = InputView;
