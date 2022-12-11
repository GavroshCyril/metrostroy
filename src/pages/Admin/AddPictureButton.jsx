import React from "react";

import {
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./HomeAdmin.css";

import Stack from "@mui/material/Stack";

export const AddPictureButton = ({ setSelectedImage }) => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
            >
                <input
                    hidden
                    name="image"
                    accept="image/*"
                    type="file"
                    required
                    onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }} />
                <AddIcon />
            </IconButton>
        </Stack>
    )
}