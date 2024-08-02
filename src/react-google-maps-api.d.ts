import React from "react";
import { LoadScriptProps } from "@react-google-maps/api";
declare module '@react-google-maps/api' {
    export const LoadScript: React.ComponentType<LoadScriptProps>;
    export const GoogleMap: React.ComponentType<any>;
    export const Marker: React.ComponentType<any>;
  }