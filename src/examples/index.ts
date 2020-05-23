import * as prompts from 'prompts';
import { OfxParser } from '../ofx';

const main = async () => {
  // const choice = await prompts({
  //   type: 'select',
  //   name: 'value',
  //   message: 'Carbonate accounts or a statement?',
  //   choices: [
  //     { title: 'Accounts', value: 0 },
  //     { title: 'Statement', value: 1 }
  //   ]
  // });
  // const filePathAnswer = await prompts({
  //   type: 'text',
  //   name: 'filePath',
  //   message: 'file path: ',
  //   validate: (val : string) =>
  //     val !== null && val.length > 0 ? true : 'file path is required.'
  // });

  // // const ofxData = await readFile(filePathAnswer.filePath);
  // // console.log('file read');
  // const ofxParser = new OfxParser();
  // const result = await ofxParser.parseStatementFile(filePathAnswer.filePath);
  // try {
  //   if (choice.value) {
  //     console.log('carbonating statement...');
  //     console.log('statement results', result.statement);
  //   } else {
  //     console.log('carbonating accounts...');
  //     console.log('account results', result.accounts)
  //   }
  // } catch (e) {
  //   console.error('error', e);
  // }
};


main();
