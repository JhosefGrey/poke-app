import { Injectable } from '@angular/core';
import { AppearanceAnimation, ProgressBar, TextAlignEnum, ToastPosition, ToastTypeEnum, ToastifyRemoteControl } from '@ng-vibe/toastify';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private toast: ToastifyRemoteControl = new ToastifyRemoteControl();
  constructor() { }

  showMessage(message: string, type: ToastTypeEnum) {
    this.toast.options = {
      text: message,
      title: 'Mensaje Del Sistema',
      autoCloseDuration: 3000,
      layoutType: type,
      position: ToastPosition.TOP_RIGHT,
      progressBar: ProgressBar.DECREASE,
      textAlign: TextAlignEnum.START,
      animationIn: AppearanceAnimation.BOUNCE_IN,
    };
    this.toast.openToast();
  }
}
