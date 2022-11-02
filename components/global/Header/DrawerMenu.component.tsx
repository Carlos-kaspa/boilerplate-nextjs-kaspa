import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

interface IDrawerMenuProps {
    items: Array<{ name: string; path: string }>
    toggle: (e: React.KeyboardEvent | React.MouseEvent) => void
    state: boolean
}

export default function DrawerMenu({
    items,
    toggle,
    state
}: IDrawerMenuProps) {

    return (
        <>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggle}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={toggle}
                    onKeyDown={toggle}
                >
                    <List>
                        <Divider />
                        {items.map(({ name, path }) => (
                            <ListItem
                                key={name}
                                disablePadding
                            >
                                <ListItemButton href={path}>
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
