import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface SectionBlockProps {
    title: string;
    children: React.ReactNode;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({ title, children }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>{title}</Typography>
            {children}
        </Box>
    );
};
