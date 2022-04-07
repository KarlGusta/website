// sivu footer for main pages

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Center,
    Text,
    Flex,
    Tag,
    useColorModeValue,
   chakra } from '@chakra-ui/react';
  import { ReactNode } from 'react';
    import { VercelCallout } from './vercel-callout'
  
  const Logo = () => {
    const fill = useColorModeValue('#2D3748', '#fff');
    return (
        <chakra.svg
        data-v-fde0c5aa
        xmlns='http://www.w3.org/2000/svg'
        height={'150px'}
        width={'150px'}
        viewBox='0 0 300 300'
      >
        {' '}
        <defs data-v-fde0c5aa>{/**/}</defs>
        <rect
          data-v-fde0c5aa
          fill='transparent'
          x={0}
          y={0}
          width='300px'
          height='300px'
          className='logo-background-square'
        />
        <defs data-v-fde0c5aa>{/**/}</defs>
        <g
          data-v-fde0c5aa
          id='212be8a1-415e-4b09-91a6-ece19a6b4a89'
          fill={fill}
          transform='matrix(5.3570339157961095,0,0,5.3570339157961095,133.46684994283663,94.87612376524548)'
        >
          <path d='M3.18 15.19C5.29 15.19 5.80 14.21 5.80 13.44C5.80 12.15 4.47 11.79 3.32 11.26C2.32 10.79 1.41 10.44 1.41 9.38C1.41 8.51 2.28 8.23 3.21 8.23C4.40 8.23 5.12 8.58 5.12 9.37C5.12 9.48 5.11 9.60 5.05 9.73C5.18 9.77 5.29 9.77 5.38 9.72C5.52 9.63 5.56 9.49 5.56 9.28C5.56 8.40 4.77 7.84 3.23 7.84C2.02 7.84 0.97 8.27 0.97 9.42C0.97 10.71 2.00 11.10 3.09 11.63C4.19 12.17 5.35 12.42 5.35 13.47C5.35 14.32 4.44 14.80 3.14 14.80C1.92 14.80 1.06 14.34 1.06 13.29C1.06 13.09 1.09 12.98 1.15 12.84C0.78 12.80 0.63 12.99 0.63 13.43C0.63 14.36 1.32 15.19 3.18 15.19ZM8.12 6.34C8.37 6.34 8.60 6.12 8.60 5.87C8.60 5.61 8.37 5.39 8.12 5.39C7.87 5.39 7.64 5.61 7.64 5.87C7.64 6.12 7.87 6.34 8.12 6.34ZM8.39 13.80L8.36 8.16C8.36 7.97 8.27 7.85 8.12 7.85C7.99 7.85 7.92 7.91 7.87 7.97C7.92 8.19 7.95 8.62 7.95 9.18L7.98 14.83C7.98 15.02 8.06 15.13 8.22 15.13C8.34 15.13 8.41 15.08 8.47 15.02C8.41 14.80 8.39 14.36 8.39 13.80ZM15.85 8.02C15.78 8.02 15.72 8.02 15.65 8.05C15.68 8.11 15.68 8.19 15.68 8.25C15.68 8.33 15.64 8.47 15.61 8.54L13.22 14.76L10.68 8.22C10.64 8.09 10.53 8.02 10.40 8.02C10.30 8.02 10.22 8.05 10.12 8.15C10.19 8.23 10.30 8.46 10.35 8.57L12.85 14.90C12.91 15.05 13.03 15.13 13.20 15.13C13.30 15.13 13.40 15.11 13.51 15.02L16.06 8.61C16.10 8.51 16.14 8.37 16.14 8.27C16.16 8.12 16.03 8.02 15.85 8.02ZM23.48 14.46C23.38 14.69 23.21 14.71 23.10 14.71C22.79 14.71 22.68 14.53 22.68 14.01L22.67 8.16C22.67 7.97 22.58 7.85 22.43 7.85C22.30 7.85 22.23 7.91 22.18 7.97C22.26 8.30 22.26 8.79 22.26 11.42C22.26 14.07 20.80 14.80 19.88 14.80C18.59 14.80 18.07 14.20 18.07 12.14L18.06 8.16C18.06 7.97 17.98 7.85 17.82 7.85C17.70 7.85 17.63 7.91 17.57 7.97C17.63 8.19 17.65 8.62 17.65 9.18L17.67 12.12C17.68 14.41 18.35 15.19 19.84 15.19C20.87 15.19 21.85 14.50 22.26 13.36L22.26 14C22.26 14.73 22.48 15.11 23.06 15.11C23.39 15.11 23.62 14.98 23.62 14.77C23.62 14.67 23.58 14.57 23.48 14.46Z' />
        </g>
        <defs data-v-fde0c5aa>
          <linearGradient
            data-v-fde0c5aa
            gradientTransform='rotate(25)'
            id='48b33192-a8eb-4b62-928d-0dfe0973c62a'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='0%'
          >
            <stop
              data-v-fde0c5aa
              offset='0%'
              stopColor='#006678'
              stopOpacity={1}
            />
            <stop
              data-v-fde0c5aa
              offset='100%'
              stopColor='#4FA8FF'
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <g
          data-v-fde0c5aa
          id='732da655-c170-4a17-8e05-083f9a7bcc30'
          stroke='none'
          fill='url(#48b33192-a8eb-4b62-928d-0dfe0973c62a)'
          transform='matrix(2.620055665132621,0,0,2.620055665132621,40,108.07910967021304)'
        >
          <path d='M17.572 23.933l4.106 7.095L32 13.189h-8.981V7.582L11.51.972 0 7.582v13.222l11.51 6.611 6.062-3.482zm10.96-8.744l-6.855 11.846-6.855-11.846h13.71z' />
        </g>
        {/**/}
      </chakra.svg>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.800')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product</ListHeader>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Tutorials</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('blue.300', 'blue.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Contribute</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Sivu</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support Us</ListHeader>
              <Link href={'#'}>GitHub</Link>
              <Link href={'#'}>Share on Facebook</Link>
              <Link href={'#'}>Share on Linkedin</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box mt={-15} py={0}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Center>
              <VercelCallout />
          </Center>
        </Box>
        <Center>
        <Box mt="5" className="noborder">
        <iframe 
            src={useColorModeValue('https://sivu.instatus.com/embed-status/light-sm', 'https://sivu.instatus.com/embed-status/dark-sm')} 
            width="215" 
            height="61" 
            frameBorder="0" 
            scrolling="no" 
          >
          </iframe>
          </Box>
        </Center>
      </Box>
    );
  }