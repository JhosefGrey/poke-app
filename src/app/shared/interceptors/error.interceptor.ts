import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastTypeEnum } from '@ng-vibe/toastify';
import { catchError, throwError } from 'rxjs';
import { SharedService } from '../services/shared.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const sharedService = inject(SharedService);
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {

        if(err.status === 404){
          sharedService.showMessage("Pokemon no encontrado", ToastTypeEnum.DANGER);

        }else{
          sharedService.showMessage(err.error, ToastTypeEnum.DANGER);
        }

      } else {
        sharedService.showMessage(err.error, ToastTypeEnum.DANGER);
      }
      return throwError(() => err);
    })
  );
};