import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaBuilding, FaChartLine, FaDollarSign, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={6}>
          Invest in Local Businesses
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="600px">
          Discover and invest in local businesses to help them grow and earn returns on your investments.
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
        <VStack spacing={4} p={5} boxShadow="md" borderRadius="lg">
          <FaBuilding size="3em" />
          <Text fontWeight="bold">Explore Businesses</Text>
          <Text textAlign="center">Browse through a variety of local businesses looking for funding.</Text>
        </VStack>
        <VStack spacing={4} p={5} boxShadow="md" borderRadius="lg">
          <FaDollarSign size="3em" />
          <Text fontWeight="bold">Invest Easily</Text>
          <Text textAlign="center">Use our platform to make secure investments with just a few clicks.</Text>
        </VStack>
        <VStack spacing={4} p={5} boxShadow="md" borderRadius="lg">
          <FaChartLine size="3em" />
          <Text fontWeight="bold">Watch Your Investment Grow</Text>
          <Text textAlign="center">Monitor your investments and see your potential earnings in real-time.</Text>
        </VStack>
      </SimpleGrid>

      <Flex direction="column" align="center" my={10}>
        <Heading as="h2" size="xl" mb={6}>
          Why Invest With Us?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfHx8fDE3MTM1MzE2MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
          </Box>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg">
              <FaHandshake /> Trusted Partnerships
            </Text>
            <Text>We partner with each business to ensure your investments are secure.</Text>
            <Text fontSize="lg">
              <FaArrowRight /> Transparent Processes
            </Text>
            <Text>Our platform provides clear information on how your money is being used.</Text>
          </VStack>
        </SimpleGrid>
      </Flex>

      <Flex justify="center" mt={10}>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
          Start Investing Today
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
