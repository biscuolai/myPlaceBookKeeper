import { Provider } from '../../provider/models/provider.model';
import { SupportBudget } from '../../support-budget/model/support-budget.model';
import { firestore } from 'firebase';

export class Payment {
  id: string;
  date: Date;
  description: string;
  amount: number;
  price: number;
  provider: string;
  supportBudget: string;
}
