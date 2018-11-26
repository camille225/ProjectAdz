import { AdzRoutingModule } from './adz-routing.module';

describe('AdzRoutingModule', () => {
  let adzRoutingModule: AdzRoutingModule;

  beforeEach(() => {
    adzRoutingModule = new AdzRoutingModule();
  });

  it('should create an instance', () => {
    expect(adzRoutingModule).toBeTruthy();
  });
});
