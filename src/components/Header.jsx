import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"10"} justifyContent={"space-evenly"}>
        <Button variant={"unstyled"} color={"white"}  css={{"&:hover": {transform: "translateY(-5px)", color: "#f2aa4cff"}}} >
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} css={{"&:hover": {transform: "translateY(-1px)", color: "#f2aa4cff"}}}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"} css={{"&:hover": {transform: "translateY(-1px)", color: "#f2aa4cff"}}}>
          <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header