import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkConfig<string>
>('user/updateFeatureFlags', async ({ newFeatures, userId }, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  const features = { ...getAllFeatureFlags(), ...newFeatures };

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features
      })
    );

    setFeatureFlags(features);
  } catch (e) {
    console.log(e);
    rejectWithValue('');
  }
});
