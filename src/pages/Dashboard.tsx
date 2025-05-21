import GardenGrid from "@/components/dashboard/garden/GardenGrid";
import NavigationBar from "@/components/dashboard/NavigationBar";
import {
  Button,
  Container,
  Grid,
  Heading,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiHome2Fill, RiLeafFill } from "react-icons/ri";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("garden");

  return (
    <Container
      height='full'
      color='black'
    >
      <Grid
        templateColumns='0.75fr 4fr'
        height='full'
        gap='4'
      >
        <Stack
          rounded='2xl'
          padding='8'
          bgGradient='to-r'
          gradientFrom='whiteAlpha.800/80'
          gradientTo='whiteAlpha.600'
        >
          <Heading
            size='lg'
            color='aqua'
            opacity='0.8'
          >
            Vision Dashboard
          </Heading>
          <Separator
            marginY='4'
            borderColor='blackAlpha.600/40'
          />
          <Stack gap='3'>
            <Button
              backgroundColor='aqua'
              color='black'
              opacity='0.8'
              onClick={() => setCurrentView("home")}
            >
              <RiHome2Fill color='red' />
              Home Activities
            </Button>
            <Button
              backgroundColor='aqua'
              color='black'
              opacity='0.8'
              onClick={() => setCurrentView("garden")}
            >
              <RiLeafFill color='green' />
              Garden
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <NavigationBar />
          {currentView === "garden" && <GardenGrid />}
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
        </Stack>
      </Grid>
    </Container>
  );
}
