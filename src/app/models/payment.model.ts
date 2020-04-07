import { Provider } from './provider.model';
import { SupportBudget } from './support-budget.model';

export class Payment {
  id: string;
  date: Date;
  description: string;
  amount: number;
  price: number;
  provider: Provider;
  supportBudget: SupportBudget;
}
