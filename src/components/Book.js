import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  HStack,
  Flex,
  Divider,
  Container,
  Heading,
  Text,
  CircularProgress,
  Button,
} from '@chakra-ui/react';

export default function Book({ book, clickHandler }) {
  const removeBook = () => {
    clickHandler(book);
  };
  const getRandomInt = max => Math.floor(Math.random() * max);
  const randomCompletionPercentage = getRandomInt(100);

  return (
    <Flex d="flex" w="100%" bg="white" border="1px" borderColor="#e8e8e8" borderRadius="5px" paddingY="32px" paddingX="26px">
      <Container alignSelf="flex-start" maxWidth="40%" m="0" p="0">
        <Flex alignItems="left" direction="column">
          <Box fontSize="14px" color="#999999" fontWeight="bold" justifyContent="flex-end">
            {book.category}
          </Box>
          <Box marginTop="10px">
            <Heading fontFamily="Roboto Slab" fontSize="22px" color="#121212" fontWeight="bold">
              {book.title}
            </Heading>
            <Text color="#4386bf" fontFamily="Roboto Slab" fontSize="14px" fontWeight="light" marginTop="0">
              Some Author
            </Text>
          </Box>

          <HStack color="#4386bf" fontFamily="Roboto Slab" fontWeight="light" fontSize="14px" marginTop="25px" spacing={6}>
            <Box>Comments</Box>
            <Divider orientation="vertical" w="1px" h="20px" bg="#e8e8e8" />
            <Box onClick={removeBook} cursor="pointer">Remove</Box>
            <Divider orientation="vertical" w="1px" h="20px" bg="#e8e8e8" />
            <Box>Edit</Box>
          </HStack>
        </Flex>
      </Container>
      <Flex w="60%" m="0" p="0">
        <Flex direction="row" alignSelf="center">
          <CircularProgress value={randomCompletionPercentage} size="70px" thickness="7px" />
          <Flex direction="column" fontFamily="Montserrat" ml="20px">
            <Heading fontSize="32px" fontWeight="normal">{`${randomCompletionPercentage}%`}</Heading>
            <Text fontSize="14px" color="#121212">Completed</Text>
          </Flex>
        </Flex>
        <Divider orientation="vertical" w="1px" h="70px" bg="#e8e8e8" marginX="100px" alignSelf="center" />
        <Flex alignItems="left" direction="column" color="#121212" fontFamily="Roboto Slab" fontWeight="300">
          <Text fontSize="13px" opacity="0.5">
            CURRENT CHAPTER
          </Text>
          <Text fontSize="16px" marginTop="10px" letterSpacing="-0.4">
            Chapter 17
          </Text>
          <Flex alignItems="flex-end" h="100%">
            <Button letterSpacing="0.5" bg="#0290ff" color="white" fontSize="13px" fontWeight="300" w="184px">
              UPDATE PROGRESS
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
