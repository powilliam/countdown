import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type PersistedState<K> = [K, Dispatch<SetStateAction<K>>];

export function usePersistedState<T>(key: string, value: T): PersistedState<T> {
  const [state, stateSet] = useState<T>(value);

  useEffect(() => {
    async function getStoredValue() {
      const storedValue = await AsyncStorage.getItem(key);

      if (storedValue) {
        stateSet(JSON.parse(storedValue));
      }
    }

    getStoredValue();
  }, [key]);

  useEffect(() => {
    async function setStoredValue() {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }

    setStoredValue();
  }, [key, state]);

  return [state, stateSet];
}
