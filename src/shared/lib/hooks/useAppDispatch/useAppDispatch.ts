import { AppDispatch } from '@/app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

/**
 * Типизированный useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
