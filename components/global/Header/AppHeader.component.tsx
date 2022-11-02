import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { IoIosMenu } from "react-icons/io";

import {
    AppBar,
    Container,
    Toolbar,
    Box,
    IconButton,
    Button,
} from '@mui/material'
import Link from 'next/link'
import { MENU_NAVIGATION } from './navigationITems'
import DrawerMenu from './DrawerMenu.component'
import { NavItem } from './NavItem.component'

const TopNavBar = () => {
    const router = useRouter()
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleRouterPush = (path: string) => {
        router.push({
            pathname: path,
        })
    }

    const toggleDrawerMenu = (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setOpenDrawer(!openDrawer)
    }

    return (
        <AppBar position="static" sx={{background: '#FFFFFF', color: '#0EA5E9', fontSize: '18px', fontWeight: 700 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(e) => toggleDrawerMenu(e)}
                            color="inherit"
                        >
                            <IoIosMenu size={40} />
                        </IconButton>

                        <DrawerMenu
                            items={MENU_NAVIGATION}
                            toggle={(e) => toggleDrawerMenu(e)}
                            state={openDrawer}
                        />
                    </Box>
                    <Link href="/">
                        <Image
                            src={'/logo/logo.svg'}
                            alt="vortex logo"
                            width={127}
                            height={44}
                            style={{ cursor: 'pointer' }}
                        />
                    </Link>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        {MENU_NAVIGATION.map(({ name, path }, index) => (
                            <NavItem
                                key={name}
                                name={name}
                                path={path}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default TopNavBar
