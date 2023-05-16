import { Flex, FlexParams, FlexProps, getFlex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

type VStackParams = Omit<FlexParams, 'direction'>;

export const getVStack = (params: VStackParams): string =>
  getFlex({
    direction: 'column',
    ...params
  });

export const VStack = (props: VStackProps) => {
  const { align = 'start' } = props;

  return (
    <Flex
      {...props}
      direction='column'
      align={align}
    />
  );
};
