import { AccountBalanceModel } from './account-balance.model';
import { AccountType, ServiceStatusType, LoanAccountType } from './ofx';

export interface AccountModel {
  bankId?: string;
  brokerId?: string;
  accountId?: string;
  ofxAccountType?: AccountType;
  loanAccountType?: LoanAccountType;
  lastUpdated?: Date;
  serverResponseDate?: Date;
  serviceStatus?: ServiceStatusType;
  ledgerBalance?: AccountBalanceModel;
  availableBalance?: AccountBalanceModel;
}
