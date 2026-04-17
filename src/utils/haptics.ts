import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export const haptics = {
  async light() {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {}
  },
  
  async medium() {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {}
  },
  
  async success() {
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch {}
  },
  
  async error() {
    try {
      await Haptics.notification({ type: NotificationType.Error });
    } catch {}
  }
};
