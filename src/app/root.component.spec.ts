import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TreatMeComponent } from '../app/root.component';

beforeEachProviders(() => [TreatMeComponent]);

describe('App: TreatMe', () => {
  it('should create the app',
      inject([TreatMeComponent], (app: TreatMeComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'treat-me works!\'',
      inject([TreatMeComponent], (app: TreatMeComponent) => {
    expect(app.title).toEqual('treat-me works!');
  }));
});