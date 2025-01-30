import React from "react";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
} as Meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Clique Aqui",

  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: "Cancelar",

  },
};
