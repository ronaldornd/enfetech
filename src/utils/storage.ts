import { Preferences } from '@capacitor/preferences';

export const storage = {
  async set(key: string, value: any): Promise<void> {
    await Preferences.set({
      key,
      value: JSON.stringify(value)
    });
  },

  async get<T>(key: string): Promise<T | null> {
    const { value } = await Preferences.get({ key });
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch (e) {
      return value as unknown as T;
    }
  },

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  },

  async clear(): Promise<void> {
    await Preferences.clear();
  },

  async migrate(): Promise<void> {
    try {
      await Preferences.migrate();
    } catch (e) {
      console.warn('Migration not supported or already performed', e);
    }
  }
};
