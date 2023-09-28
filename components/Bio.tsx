import { Box, chakra, Heading } from "@chakra-ui/react";
import TypeWriter from "./TypeWriter";

export const BioText = chakra(Box, {
  baseStyle: {
    pl: "3.5em",
    textIndent: "-3.5em",
  },
});

export const BioYear = chakra("span", {
  baseStyle: {
    float: "left",
    w: "3.5em",
    // mr: '1em',
    fontWeight: 800,
  },
});

const Bio = () => {
  return (
    <Box>
      <Box textAlign={"left"} w={"100%"}>
        <Heading
          size={"md"}
          letterSpacing={"tight"}
          my={"4px"}
          fontWeight={200}
          fontSize={{ base: 20, sm: 28 }}
        >
          <TypeWriter>Bio</TypeWriter>
        </Heading>
      </Box>
      <BioText>
        <BioYear>2000</BioYear>
        Born in Sydney, Australia.
      </BioText>
      <BioText>
        <BioYear>2018</BioYear>
        Graduated from St Ives High School.
      </BioText>
      <BioText>
        <BioYear>2021</BioYear>
        Worked at Mastercard as a Software Intern.
      </BioText>
      <BioText>
        <BioYear>2022</BioYear>
        Worked at Sensoria as a Software Engineer.
      </BioText>
      <BioText>
        <BioYear>2022</BioYear>
        Completion of Bioinformatics Engineering (Honours) at the University of
        New South Wales (UNSW).
      </BioText>
      <BioText>
        <BioYear>2023</BioYear>
        Working at Mastercard as a Software Engineer.
      </BioText>
    </Box>
  );
};

export default Bio;
