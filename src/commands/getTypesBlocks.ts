const NAME_START = 8;
const getType = (value: unknown) => Object.prototype.toString.call(value).slice(NAME_START, -1);

const session = app.sessionWithName('Test');

if (session) {
  for (const block of session.blocks) {
    console.log(
      `Block Type: "${block.type}"     |     JS Type: "${getType(
        block,
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
      )}"     |     Value: ${block}`,
    );
  }
}
