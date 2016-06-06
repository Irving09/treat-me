import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TreatmeAppComponent } from '../app/treatme.component';

beforeEachProviders(() => [TreatmeAppComponent]);

describe('App: Treatme', () => {
  it('should create the app',
      inject([TreatmeAppComponent], (app: TreatmeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'treatme works!\'',
      inject([TreatmeAppComponent], (app: TreatmeAppComponent) => {
    expect(app.title).toEqual('treatme works!');
  }));
});
