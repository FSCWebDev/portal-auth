import { Stat, HStack, Icon } from "@chakra-ui/react";
import { LuDollarSign } from "react-icons/lu";

interface Props {
  title: string;
  value: string;
}

export default function StatContainer({ title, value }: Props) {
  return (
    <Stat.Root
      maxW='240px'
      p='4'
      rounded='md'
      color='white'
      bgGradient='to-r'
      gradientFrom='whiteAlpha.800/80'
      gradientTo='whiteAlpha.600'
    >
      <HStack justify='space-between'>
        <Stat.Label>{title}</Stat.Label>
        <Icon color='fg.muted'>
          <LuDollarSign />
        </Icon>
      </HStack>
      <Stat.ValueText>{value}</Stat.ValueText>
    </Stat.Root>
  );
}
