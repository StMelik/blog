import { FeatureFlags } from '@/shared/types/featureFlags';
import { ReactElement } from 'react';
import { getFeatureFlags } from '../lib/setGetFeatures';

interface ToggleFeatureProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
  const { feature, on, off } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
