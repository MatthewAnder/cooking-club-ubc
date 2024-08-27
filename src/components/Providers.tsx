import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
