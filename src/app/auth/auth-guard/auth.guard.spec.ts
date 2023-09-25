import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow logged user to access page', () => {
    guard.canLoad().subscribe(isAllowed => {
      expect(isAllowed).toBeTruthy();
    });
  });
});
