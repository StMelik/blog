import { Flex, FlexParams, FlexProps, getFlex } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

type HStackParams = Omit<FlexParams, 'direction'>;

export const getHStack = (params: HStackParams): string =>
  getFlex({
    direction: 'row',
    ...params
  });

export const HStack = (props: HStackProps) => (
  <Flex
    direction='row'
    {...props}
  />
);
