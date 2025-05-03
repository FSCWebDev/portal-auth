import { Box, Container, Grid, GridItem, Stat } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container width='full'>
      <Grid gridTemplateColumns='2fr 6fr'>
        <Box
          height='calc(100vh - 32px)'
          style={{
            backgroundColor: "#c4c4c4",
            borderRadius: "15px",
            padding: "16px",
          }}
        >
          Hello
        </Box>
        <Grid
          height='calc(100vh - 32px)'
          gridTemplateColumns='repeat(4, 1fr)'
        >
          <GridItem>
            <Stat.Root>
              <Stat.Label>Temp</Stat.Label>
              <Stat.ValueText>30.0˚</Stat.ValueText>
            </Stat.Root>
          </GridItem>
          <GridItem>
            <Stat.Root>
              <Stat.Label>Temp</Stat.Label>
              <Stat.ValueText>30.0˚</Stat.ValueText>
            </Stat.Root>
          </GridItem>
          <GridItem>
            <Stat.Root>
              <Stat.Label>Temp</Stat.Label>
              <Stat.ValueText>30.0˚</Stat.ValueText>
            </Stat.Root>
          </GridItem>
          <GridItem>
            <Stat.Root>
              <Stat.Label>Temp</Stat.Label>
              <Stat.ValueText>30.0˚</Stat.ValueText>
            </Stat.Root>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
}
