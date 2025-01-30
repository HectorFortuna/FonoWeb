import React, { useState } from "react";
import { FormGroup } from "./FormGroup";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/FormGroup",
  component: FormGroup,
} as Meta;

export const Default: StoryObj<typeof FormGroup> = {
  args: {
    placeholder: "Digite seu email...",
    value: "",
    onChange: () => {},
  },
};
