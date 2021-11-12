import React from "react";
import { Fade } from "react-awesome-reveal";
import { ContainerDefault, TitleContent } from "../../styles/commonStyles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <ContainerDefault>
      <Fade direction="down" delay={100}>
        <TitleContent>
          <h1>{title}</h1>
        </TitleContent>
      </Fade>
    </ContainerDefault>
  );
}
