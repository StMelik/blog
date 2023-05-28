import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
  isAppRedesigned: true
};

// ФИЧИ НЕ МЕНЯЮТСЯ В хОДЕ СЕССИИ
let featureFlags: FeatureFlags = { ...defaultFeatures };

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
