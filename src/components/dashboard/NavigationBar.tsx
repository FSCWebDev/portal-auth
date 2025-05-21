import { Avatar } from "@/components/ui/avatar";
import { InputGroup } from "@/components/ui/input-group";
import { Breadcrumb, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { IoIosNotifications, IoIosSearch, IoMdSettings } from "react-icons/io";
import { LiaSlashSolid } from "react-icons/lia";

export default function NavigationBar() {
  return (
    <Flex
      justifyContent='space-between'
      paddingX='2'
    >
      <Stack color='black'>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link>Portal</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <LiaSlashSolid />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link color='white'>Dashboard</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Text
          color='white'
          fontWeight='bold'
        >
          Dashboard
        </Text>
      </Stack>
      <Flex
        gap='4'
        justifyContent='flex-end'
        alignItems='center'
        color='white'
      >
        <InputGroup startElement={<IoIosSearch />}>
          <Input
            placeholder='Type here...'
            rounded='2xl'
            borderColor='gray.500'
          />
        </InputGroup>
        <Avatar />
        <Icon size='lg'>
          <IoMdSettings />
        </Icon>
        <Icon size='lg'>
          <IoIosNotifications />
        </Icon>
      </Flex>
    </Flex>
  );
}
