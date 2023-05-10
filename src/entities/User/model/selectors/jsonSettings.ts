import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/JsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings
);
