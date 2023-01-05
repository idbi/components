
import React from "react";

export interface IToggleSwitch {
  initial: boolean
  onToggle?: (val: boolean) => void
  disabled?: boolean
  width?: number
  padding?: number
  styleOn?: {
    background?: string
    ballColor: string
    border?: string
  }
  styleOff?: {
    background?: string
    ballColor: string
    border?: string
  }
}

export declare const ToggleSwitch: (props: IToggleSwitch) => JSX.Element;
