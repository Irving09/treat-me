import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TreatMeAppComponent } from '../app/treat-me.component';

beforeEachProviders(() => [TreatMeAppComponent]);

describe('App: TreatMe', () => {
  it('should create the app',
      inject([TreatMeAppComponent], (app: TreatMeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'treat-me works!\'',
      inject([TreatMeAppComponent], (app: TreatMeAppComponent) => {
    expect(app.title).toEqual('treat-me works!');
  }));
});
