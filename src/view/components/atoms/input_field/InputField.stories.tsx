import React, { useState } from "react";
import { InputField } from "./InputField";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/InputField",
  component: InputField,
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
  },
} as Meta;

export const Default: StoryObj<typeof InputField> = {
  args: {
    label: "Nome",
    placeholder: "Digite seu nome...",
    value: "",
    onChange: () => {},
  },
};
