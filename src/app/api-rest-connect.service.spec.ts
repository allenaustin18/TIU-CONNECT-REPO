import { TestBed } from '@angular/core/testing';

import { ApiRestConnectService } from './api-rest-connect.service';

describe('ApiRestConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRestConnectService = TestBed.get(ApiRestConnectService);
    expect(service).toBeTruthy();
  });
});
