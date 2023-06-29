import React from "react"
import { useMediaQuery } from "react-responsive"

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:1304px)"
  });
  return <>{isPc && children}</>
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: 769, maxWidth: 1303
  });
  return <>{isTablet && children}</>
}


export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });
  return <>{isMobile && children}</>
}

