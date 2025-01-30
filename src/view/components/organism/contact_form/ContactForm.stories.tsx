import React from "react";
import { ContactForm } from "../../../page/ContactForm";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Organisms/ContactForm",
  component: ContactForm,
} as Meta;

export const Default: StoryObj<typeof ContactForm> = {};
