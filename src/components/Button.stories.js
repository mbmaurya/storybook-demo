import React from "react";
import "../../src/index.css";
// import { action } from '@storybook/addon-actions';

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

export const Default = () => <Button buttonState="default" />;
export const Hovered = () => <Button buttonState="hovered" />;
export const Clicked = () => <Button buttonState="clicked" />;
export const Primary = () => <Button buttonState="primary" />;
