import { AccountBalanceModel } from './account-balance.model';

export type AccountType = 'CHECKING' | 'SAVINGS' | 'MONEYMRKT' | 'CREDITLINE' | 'CD' | 'CREDITCARD' | 'INVESTMENT' | 'LOAN' | undefined;
export type LoanAccountType = 'AUTO' | 'CONSUMER' | 'MORTGAGE' | 'COMMERCIAL' | 'STUDENT' | 'MILITARY' | 'SMB' | 'CONSTR' | 'HOMEEQUITY' | undefined;
export type ServiceStatusType = 'AVAIL' | 'PEND' | 'ACTIVE' | undefined;

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
