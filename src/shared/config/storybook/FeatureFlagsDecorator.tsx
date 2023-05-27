import '../../../app/styles/index.scss';
import { Story } from '@storybook/react/types-6-0';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeatureFlagsDecorator = (features: FeatureFlags) =>
  function (StoryComponent: Story) {
    setFeatureFlags(features);

    return <StoryComponent />;
  };
