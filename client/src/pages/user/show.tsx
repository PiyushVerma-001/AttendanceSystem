import { IResourceComponentsProps } from "@refinedev/core";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import React, { useContext } from "react";
import { AxiosRequestConfig } from 'axios';

type IUser = {
    id: number;
    name: string;
    avatar: string;
  };

export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const { data: user } = useGetIdentity<IUser>();
    const showUserInfo = user && (user.name || user.avatar);

  return (
  <>
  Home wrg
{showUserInfo && (
            <Stack direction="row" gap="16px" alignItems="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              {user.name && (
                <Typography variant="subtitle2">{user?.name}</Typography>
              )}
            </Stack>
          )}
  </>
    );
};