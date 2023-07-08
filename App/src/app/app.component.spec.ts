import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/addon-mobile';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TuiRootModule,
        TuiAppBarModule,
        TuiSidebarModule,
      ],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tenant App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.reversed span')?.textContent).toContain(
      'Tenant App'
    );
  });

  // ReferenceError: spyOn is not defined
  // cannot use jest spyOn method
  // TODO: fix this test
  // it('should menu click', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const app = fixture.componentInstance;
  //   spyOn(app, 'toggle');
  //   const button = fixture.debugElement.nativeElement.querySelector('.menu');
  //   button.click();

  //   tick();
  //   expect(app.toggle).toHaveBeenCalled();
  // }));
});
