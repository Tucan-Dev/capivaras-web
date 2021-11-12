import React from "react";
import { ContainerDefault, TitleContent } from "../../styles/commonStyles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <ContainerDefault>
      <TitleContent>
        <h1>{title}</h1>
      </TitleContent>
    </ContainerDefault>
  );
}
