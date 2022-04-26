import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Avatar,
  Fab,
  Badge,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Edit,
  MailOutline,
  PhotoCamera,
  Settings,
  Logout,
} from "@mui/icons-material";
import colors from "../../config/colors";

const Input = styled("input")({
  display: "none",
  width: 0,
  height: 0,
});

const menuWidth = 240;

function Dashboard({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorAvatar, setAnchorAvatar] = useState(null);
  const open = Boolean(anchorAvatar);

  const handleClickAvatar = event => {
    setAnchorAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorAvatar(null);
  };

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menu = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <MailOutline />
          </ListItemIcon>
          <ListItemText primary="Teste" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <MailOutline />
          </ListItemIcon>
          <ListItemText primary="Teste 2" />
        </ListItemButton>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${menuWidth}px)` },
          ml: { sm: `${menuWidth}px` },
        }}>
        <Toolbar
          sx={{
            backgroundColor: colors.background,
            color: colors.dark,
          }}>
          <IconButton
            color="inherit"
            aria-label="abrir menu"
            edge="start"
            onClick={handleMenuToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ flex: 1, alignSelf: "flex-start", color: "#5E6366" }}>
              Dashboard
            </Typography>
            <Typography noWrap sx={{ flex: 2 }}>
              Barbearia do Benjamin
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}>
              <Tooltip title="Sua Conta">
                <IconButton
                  onClick={handleClickAvatar}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}>
                  <Avatar
                    src={require("../../assets/avatar.jpg")}
                    alt="Perfil"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorAvatar}
              id="account-menu"
              open={open}
              onClose={handleCloseAvatar}
              onClick={handleCloseAvatar}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              <MenuItem>
                <Avatar /> Perfil
              </MenuItem>
              <MenuItem>
                <Avatar /> Conta
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Configurações
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sair
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: menuWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: menuWidth },
          }}>
          {menu}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: menuWidth },
          }}
          open>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton alt="Editar">
                <label
                  htmlFor="icon-button-file"
                  style={{ margin: 0, padding: 0 }}>
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <Edit color="primary" />
                </label>
              </IconButton>
            }
            sx={{ marginRight: -1 }}>
            <Avatar
              src={require("../../assets/logo.jpg")}
              alt="Logo Lojista"
              variant="square"
              sx={{
                minWidth: menuWidth - 2,
                minHeight: 140,
              }}>
              <Fab>
                <label htmlFor="icon-button-file" style={{ paddingTop: 6 }}>
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <PhotoCamera color="primary" />
                </label>
              </Fab>
            </Avatar>
          </Badge>
          {menu}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${menuWidth}px)` },
        }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
