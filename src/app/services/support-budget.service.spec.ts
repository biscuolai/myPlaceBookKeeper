import { TestBed } from '@angular/core/testing';

import { SupportBudgetService } from './support-budget.service';

describe('SupportBudgetService', () => {
  let service: SupportBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
