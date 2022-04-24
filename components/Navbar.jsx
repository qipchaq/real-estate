import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Link as LinkChakra } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';
// import { BsSearch } from 'react-icons/bs';
// import { FiKey } from 'react-icons/fi';

const Navbar = () => {
    // const navbarItems = [
    //     {
    //         href: '/',
    //         icon: 'FcHome',
    //         name: 'Home'
    //     }
    // ]

    const navbarItems1 = [
        {
            href: '/',
            icon: '{<FcHome />}',
            name: 'Home',
            id: 1
        },
        {
            href: '/search',
            icon: '{<BsSearch />}',
            name: 'Search',
            id: 2
        },
        {
            href: '/search?purpose=for-sale',
            icon: '{<FcAbout />}',
            name: 'Buy Property',
            id: 3
        },
        {
            href: '/search?purpose=for-rent',
            icon: '{<FiKey />}',
            name: 'Rent Property',
            id: 4
        },
    ]

    return (
        <Flex p='2' mr='2' ml='2' borderBottom='1px' borderColor='gray.100' justifyContent='space-between'>
            <Box fontSize='3xl' color='blue.400' fontweight='bold'>
                <Link href='/' paddingLeft='2'>Realtor</Link>
            </Box>
            <Flex alignItems='center' gap={6} display={{ base: "none", md: "flex" }}>
                {navbarItems1.map((item) => (
                    <Link href={item.href} key={item.id} passHref>
                        <LinkChakra fontWeight='bold'>
                            {item.name}
                        </LinkChakra>
                    </Link>
                ))}
            </Flex>
            <Box display={{ base: "block", md: "none" }}>
                <Flex w="100%" align="center" justify="space-between">
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                        <MenuList>
                            {navbarItems1.map((item) => (
                                <Link href={item.href} key={item.id} passHref>
                                    <MenuItem fontWeight='bold'>{item.name}</MenuItem>
                                </Link>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Navbar