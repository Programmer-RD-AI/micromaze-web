import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "20th July, 2024",
    title: "Registrations Open",
    description: `The beginning of an exciting journey!`,
  },
  {
    id: 2,
    date: "18th July, 2024",
    title: "Awareness Session",
    description: `An informative session to kick things off.`,
  },
  {
    id: 3,
    date: "18th July, 2024",
    title: "Registrations Close",
    description: `Last chance to be a part of this event.`,
  },
  {
    id: 4,
    date: "24th July, 2024",
    title: "Online Workshop",
    description: `Join us online for an engaging session.`,
  },
  {
    id: 5,
    date: "24th August, 2024",
    title: "Qualifier Round",
    description: `Show your skills and qualify for the finale.`,
  },
  {
    id: 6,
    date: "25th August, 2024",
    title: "The Grand Finale",
    description: `The grand finale - Get Ready to conquer the Maze!`,
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      position="relative"
      bgImage="url('/timeline/bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} borderRadius="lg">
        <chakra.h3
          fontSize="7xl"
          fontFamily="reross-quadratic"
          fontWeight="normal"
          mb={18}
          textAlign="center"
          style={{ color: "white" }}
        >
          Timeline
        </chakra.h3>
        {milestones.map((milestone) => (
          <Flex key={milestone.id} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && milestone.id % 2 === 0 && (
              <>
                <EmptyCard />
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <LineWithDot />
                <Card {...milestone} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && milestone.id % 2 !== 0 && (
              <>
                <Card {...milestone} />
                <LineWithDot />
                <EmptyCard />
              </>
            )}
          </Flex>
        ))}
      </Container>
    </Box>
  );
};

const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="3xl" fontFamily={"t26-carbon"} fontWeight={"bold"} color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontFamily={"reross-quadratic"} fontSize="3xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontFamily={"t26-carbon"} fontSize="2xl">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};
const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
