import { OfxCreditCardAccount, OfxCreditCardAccountFrom, ServiceStatusType, AccountType } from './ofx-body';
import { AccountModel } from '../account.model';

export class OfxCreditCardAccountAdapter {
  public static convertToAccount(accountInfo?: OfxCreditCardAccount, accountFromInfo?: OfxCreditCardAccountFrom): AccountModel {
    let accountId: string | undefined;
    let serviceStatus: ServiceStatusType;
    let ofxAccountType: AccountType;
    let bankId: string| undefined;

    if(accountInfo)
    {
      accountId = accountInfo.CCACCTINFO.CCACCTFROM.ACCTID;
      serviceStatus = accountInfo.CCACCTINFO.SVCSTATUS;
      ofxAccountType = accountInfo.CCACCTINFO.CCACCTFROM.ACCTTYPE;
      bankId = accountInfo.CCACCTINFO.CCACCTFROM.BANKID;
    }
    else if(accountFromInfo)
    {
      accountId = accountFromInfo.ACCTID;
    }

    return {
      accountId: accountId,
      serviceStatus: serviceStatus,
      ofxAccountType,
      bankId
    };
  }
}
